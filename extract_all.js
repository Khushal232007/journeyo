import fs from 'fs';

const data = fs.readFileSync('mapsmyway_bundle.js', 'utf8');

// Find all matches of {slug: "..." or slug: "..."
// Since the bundle is minified, fields might be unquoted like slug:"..." or "slug":"..."
// Let's search for keywords like slug:
const regex = /({slug:"[^"]+"[^}]+})/g;
let match;
let count = 0;

console.log("Analyzing overall patterns of packages with slugs...");

// Let's write a more sophisticated parser that finds where Pl or similar arrays are defined.
// Look for [{slug:
const arrayMatchRegex = /(\w+)\s*=\s*\[\s*\{\s*slug\s*:/g;
while ((match = arrayMatchRegex.exec(data)) !== null) {
  const varName = match[1];
  const index = match.index;
  console.log(`Found package-like array assignment for variable "${varName}" at position ${index}`);
  
  // Let's find the closing bracket of this array
  // We can scan character by character from the opening brackets `[` to match balanced brackets `[` and `]`
  let braceCount = 1;
  let arrayStr = "[";
  let pos = index + match[0].length - 1; // start after '[' (before '}')
  
  // Actually, match[0] ends at 'slug :' or similar, let's find the first '[' after the '='
  const eqIndex = data.indexOf('=', index);
  const openBracketIndex = data.indexOf('[', eqIndex);
  
  let bracketCount = 1;
  let i = openBracketIndex + 1;
  while (bracketCount > 0 && i < data.length) {
    const char = data[i];
    if (char === '[') bracketCount++;
    else if (char === ']') bracketCount--;
    i++;
  }
  
  const fullArrayText = data.substring(openBracketIndex, i);
  console.log(`Extracted array text length: ${fullArrayText.length}`);
  fs.writeFileSync(`extracted_array_${varName}.js`, `module.exports = ${fullArrayText};`);
  console.log(`Saved extracted_array_${varName}.js`);
}

// Let's also do a general search for all occurrences of "slug:" in the bundle to see if there are others.
let slugIndex = 0;
const slugOccurrences = [];
while ((slugIndex = data.indexOf('slug:', slugIndex)) !== -1) {
  slugOccurrences.push(slugIndex);
  slugIndex += 5;
}
console.log(`Total occurrences of "slug:": ${slugOccurrences.length}`);
