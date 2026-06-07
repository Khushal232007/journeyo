import fs from 'fs';

const files = ['char-dham-page-BHZcj3Yq.js', 'tours-page-BPma7xVc.js'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`====================== File: ${f} ======================`);
  
  // Search for any string literals or arrays
  // Let's print the entire text if it is small, or search for uppercase keys like KEDARNATH, BADRINATH, etc.
  const keywords = ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath', 'Yatra', 'Dham', 'Ek Dham', 'Do Dham', 'Char Dian', 'price', 'pricing', 'days', 'duration'];
  
  keywords.forEach(kw => {
    let idx = 0;
    let occurrences = [];
    while ((idx = content.indexOf(kw, idx)) !== -1) {
      occurrences.push(idx);
      idx += kw.length;
    }
    if (occurrences.length > 0) {
      console.log(`Keyword "${kw}" found ${occurrences.length} times. Matches around first:`);
      console.log(content.substring(Math.max(0, occurrences[0] - 50), Math.min(content.length, occurrences[0] + 250)));
      console.log('---');
    }
  });
});
