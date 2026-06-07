import fs from 'fs';

const data = fs.readFileSync('mapsmyway_bundle.js', 'utf8');

// Let's search for keywords to locate the data block
const keywords = ['Yatra', 'Trek', 'Pilgrimage', 'Yamunotri', 'Kedarnath', 'Badrinath', 'Chopta', 'Valley of Flowers', 'Hemkund'];

for (const kw of keywords) {
  const index = data.indexOf(kw);
  if (index !== -1) {
    console.log(`Keyword "${kw}" found at position ${index}`);
    // Print around the position
    const start = Math.max(0, index - 150);
    const end = Math.min(data.length, index + 350);
    console.log(`Context:\n${data.substring(start, end)}\n-------------------\n`);
  } else {
    console.log(`Keyword "${kw}" not found`);
  }
}
