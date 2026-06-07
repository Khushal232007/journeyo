import fs from 'fs';

try {
  const content = fs.readFileSync('chalo-series-data-Bnm8f3mn.js', 'utf8');
  const cleanCode = content.substring(content.indexOf('i=[')).replace('i=', '');
  // Since it was assigned to i: i=[...]
  // Let's create a dynamic function to extract the value of i
  const arrayCode = cleanCode.substring(0, cleanCode.lastIndexOf(']') + 1);
  const chaloData = new Function(`return ${arrayCode}`)();
  console.log(`Successfully loaded ${chaloData.length} Chalo destinations!`);
  fs.writeFileSync('src/extracted_chalo_data.json', JSON.stringify(chaloData, null, 2));
  chaloData.forEach((item, idx) => {
    console.log(`[${idx+1}] Slug: ${item.slug}, Name: ${item.name}`);
    console.log(`    Tagline: ${item.tagline}`);
    console.log(`    Description: ${item.shortDescription}`);
    console.log(`    Images: ${JSON.stringify(item.images)}`);
    console.log(`    Badge: ${item.badge}`);
  });
} catch (err) {
  console.error("Error loading Chalo Series:", err);
}
