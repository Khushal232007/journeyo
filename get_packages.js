import fs from 'fs';

async function main() {
  console.log("Fetching home page...");
  try {
    const res = await fetch("https://mapsmyway.com/");
    const html = await res.text();
    console.log("HTML fetched. Searching for script tag...");
    
    // Search for main script bundle
    const scriptMatch = html.match(/src="(\/assets\/index-[^"]+\.js)"/);
    if (!scriptMatch) {
      console.error("Could not find index.js in html:", html);
      return;
    }
    
    const jsUrl = "https://mapsmyway.com" + scriptMatch[1];
    console.log("Found main JS URL:", jsUrl);
    
    const jsRes = await fetch(jsUrl);
    const jsText = await jsRes.text();
    console.log("JS Text fetched length:", jsText.length);
    
    // Save JS file locally to analyze
    fs.writeFileSync("mapsmyway_bundle.js", jsText);
    console.log("Saved mapsmyway_bundle.js successfully!");
  } catch (error) {
    console.error("Error fetching or parsing:", error);
  }
}

main();
