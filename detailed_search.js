import fs from 'fs';

const data = fs.readFileSync('mapsmyway_bundle.js', 'utf8');

// List of cities and terms
const locations = [
  'Nainital', 'Mussoorie', 'Rishikesh', 'Haridwar', 'Auli', 
  'Barkot', 'Uttarkashi', 'Guptkashi', 'Kedarnath', 'Badrinath', 
  'Yamunotri', 'Gangotri', 'Harsil', 'Kharadi', 'Phata', 'Sersi'
];

locations.forEach(loc => {
  let idx = 0;
  let count = 0;
  while ((idx = data.indexOf(loc, idx)) !== -1) {
    count++;
    idx += loc.length;
  }
  console.log(`Location "${loc}" found ${count} times.`);
});

// Let's print out text around "Char Dham Yatra" or "char-dham" or "helicopters"
const keywords = ["char-dham", "chalo-series", "tours", "helicopters"];
keywords.forEach(kw => {
  let idx = 0;
  let matches = [];
  while ((idx = data.indexOf(kw, idx)) !== -1) {
    matches.push(idx);
    idx += kw.length;
  }
  console.log(`Keyword "${kw}" matches found at positions: ${matches.join(', ')}`);
  
  matches.forEach(pos => {
    const start = Math.max(0, pos - 150);
    const end = Math.min(data.length, pos + 350);
    console.log(`Pos ${pos} Context:\n${data.substring(start, end)}\n`);
  });
});
