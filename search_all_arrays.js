import fs from 'fs';

const data = fs.readFileSync('mapsmyway_bundle.js', 'utf8');

// Let's do a search for keywords that represent individual packages in Tours, Char Dham and Chalo Series.
// Some possible packages: "Char Dham Yatra", "Do Dham", "Kedarnath", "Badrinath", "Heli", "Chalo", "Tours"
// Let's search for any objects that have fields like "slug", "name" or similar, inside other array variables.

// Find all matches for variables assigned to arrays, e.g. "xl = [" or "const xl = [" 
// and look inside them for slug: or title: or name:
const arrayAssigns = [];
const regex = /(\b[A-Za-z0-9_$]+)\s*=\s*\[/g;
let match;
while ((match = regex.exec(data)) !== null) {
  const varName = match[1];
  const startIdx = match.index;
  
  // Find matching closing bracket
  let bracketCount = 1;
  let i = startIdx + match[0].length;
  while (bracketCount > 0 && i < data.length) {
    const char = data[i];
    if (char === '[') bracketCount++;
    else if (char === ']') bracketCount--;
    i++;
  }
  
  const arrayText = data.substring(startIdx, i);
  if (arrayText.includes('slug') || arrayText.includes('name') || arrayText.includes('title')) {
    if (arrayText.length > 200 && arrayText.length < 50000) {
      console.log(`Found candidate array assigned to "${varName}" of length ${arrayText.length}`);
      // Print first 200 chars
      console.log(`Snippet: ${arrayText.substring(0, 300)}...`);
      console.log("-----------------------------------------");
    }
  }
}
