import fs from 'fs';

// Since the file is CommonJS module.exports, we can require it, but we use tsx so let's import it or read and eval it.
try {
  const fileContent = fs.readFileSync('extracted_array_Pl.js', 'utf8');
  // eval the content
  const arrayCode = fileContent.replace('module.exports =', '');
  
  // Let's execute in a safe context
  const packages = new Function(`return ${arrayCode}`)();
  
  console.log(`Successfully loaded ${packages.length} packages!`);
  
  // Write the clean JSON representation to a file
  fs.writeFileSync('src/extracted_packages.json', JSON.stringify(packages, null, 2));
  console.log("Successfully wrote clean JSON to src/extracted_packages.json");
  
  // Print short summaries for checking
  packages.forEach((pkg, idx) => {
    console.log(`[${idx+1}] Slug: ${pkg.slug}`);
    console.log(`    Name: ${pkg.name}`);
    console.log(`    Difficulty: ${pkg.difficulty}`);
    console.log(`    Duration: ${pkg.durationDays} days`);
    console.log(`    Season: ${pkg.bestSeason}`);
    console.log(`    Short description: ${pkg.shortDescription}`);
    console.log(`    Category: ${pkg.category || 'none'}`);
    console.log(`    Images: ${JSON.stringify(pkg.images)}`);
    if (pkg.guideContent) {
      console.log(`    Guide Overview: ${pkg.guideContent.overview ? pkg.guideContent.overview.substring(0, 50) + '...' : 'none'}`);
      console.log(`    Itinerary Days: ${pkg.guideContent.itinerary ? pkg.guideContent.itinerary.length : 0}`);
    }
  });

} catch (error) {
  console.error("Error evaluating extracted array:", error);
}
