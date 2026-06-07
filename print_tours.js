import fs from 'fs';

try {
  const content = fs.readFileSync('extracted_tours_h.js', 'utf8');
  const cleanCode = content.replace('module.exports =', '');
  const h = new Function(`return ${cleanCode}`)();
  console.log("Loaded Tours array:", JSON.stringify(h, null, 2));
} catch (err) {
  console.error(err);
}
