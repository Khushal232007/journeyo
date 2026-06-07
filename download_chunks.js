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
    'char-dham-page-BHZcj3Yq.js',
    'tours-page-BPma7xVc.js',
    'treks-page-tGmjamzu.js',
    'chalo-series-page-DTd6R0IS.js',
    'chalo-series-data-Bnm8f3mn.js'
  ];
  
  for (const f of files) {
    await download(f);
  }
}

main();
