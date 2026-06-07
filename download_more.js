import fs from 'fs';

async function download(filename) {
  const url = `https://mapsmyway.com/assets/${filename}`;
  console.log(`Downloading ${url}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to download ${filename}, status: ${res.status}`);
      return;
    }
    const text = await res.text();
    fs.writeFileSync(filename, text);
    console.log(`Saved ${filename} of length ${text.length}`);
  } catch (err) {
    console.error(`Error downloading ${filename}:`, err);
  }
}

async function main() {
  const files = [
    'char-dham-section-HVj3HgU3.js',
    'tours-section-C-7APoqP.js'
  ];
  
  for (const f of files) {
    await download(f);
  }
}

main();
