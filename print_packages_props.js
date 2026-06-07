import fs from 'fs';

const pkgs = JSON.parse(fs.readFileSync('src/extracted_packages.json', 'utf8'));
console.log("Keys available on trek object[0]:");
console.log(Object.keys(pkgs[0]));
console.log("GuideContent keys available on trek object[0]:");
console.log(Object.keys(pkgs[0].guideContent));
console.log("Sample itinerary item keys on trek object[0]:");
if (pkgs[0].guideContent.itinerary && pkgs[0].guideContent.itinerary.length > 0) {
  console.log(Object.keys(pkgs[0].guideContent.itinerary[0]));
}
console.log("Sample trek object images:", pkgs[0].images);
