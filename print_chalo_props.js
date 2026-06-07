import fs from 'fs';

const pkgs = JSON.parse(fs.readFileSync('src/extracted_chalo_data.json', 'utf8'));
console.log("Keys available on Chalo destination object[0]:");
console.log(Object.keys(pkgs[0]));
if (pkgs[0].guideContent) {
  console.log("GuideContent keys available on Chalo destination object[0]:");
  console.log(Object.keys(pkgs[0].guideContent));
}
if (pkgs[0].itinerary) {
  console.log("Itinerary keys available on Chalo destination object[0]:");
  console.log(Object.keys(pkgs[0].itinerary[0]));
}
