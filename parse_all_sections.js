import fs from 'fs';

const files = ['char-dham-section-HVj3HgU3.js', 'tours-section-C-7APoqP.js'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`====================== File: ${f} ======================`);
  
  // Let's do a search for balanced arrays of objects
  const regex = /(\b[A-Za-z0-9_$]+)\s*=\s*\[\s*\{\s*/g;
  let match;
  let found = false;
  while ((match = regex.exec(content)) !== null) {
    found = true;
    const varName = match[1];
    const index = match.index;
    
    // Extract balanced brackets
    let bracketCount = 1;
    let i = index + match[0].length;
    while (bracketCount > 0 && i < content.length) {
      if (content[i] === '[') bracketCount++;
      else if (content[i] === ']') bracketCount--;
      i++;
    }
    const arrayText = content.substring(index, i);
    console.log(`Found candidate array variable "${varName}" of length ${arrayText.length}`);
    console.log(`Snippet: ${arrayText.substring(0, 300)}...`);
    fs.writeFileSync(`extracted_${f.split('-')[0]}_${varName}.js`, `module.exports = ${arrayText.replace(varName + '=', '')};`);
    console.log(`Saved extracted_${f.split('-')[0]}_${varName}.js`);
    console.log("-----------------------------------------");
  }
});
