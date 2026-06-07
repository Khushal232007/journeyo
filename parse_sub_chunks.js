import fs from 'fs';

const files = [
  'char-dham-page-BHZcj3Yq.js',
  'tours-page-BPma7xVc.js',
  'treks-page-tGmjamzu.js',
  'chalo-series-page-DTd6R0IS.js',
  'chalo-series-data-Bnm8f3mn.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`====================== File: ${f} ======================`);
  
  // Search for array assignments like val = [ { ...
  const regex = /(\b[A-Za-z0-9_$]+)\s*=\s*\[\s*\{\s*/g;
  let match;
  let found = false;
  while ((match = regex.exec(content)) !== null) {
    found = true;
    const varName = match[1];
    const index = match.index;
    
    // Extrat balanced brackets
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
    console.log("-----------------------------------------");
  }
  
  if (!found) {
    console.log("No array assignments found of format 'v = [{'");
    // Let's search generally for 'slug' or 'name' or 'duration'
    const occurrences = [];
    let idx = 0;
    while ((idx = content.indexOf('slug:', idx)) !== -1) {
      occurrences.push(idx);
      idx += 5;
    }
    console.log(`Occurrences of 'slug:': ${occurrences.length}`);
    if (occurrences.length > 0) {
      console.log(`Context near first slug: ${content.substring(occurrences[0]-50, occurrences[0]+300)}`);
    }
  }
});
