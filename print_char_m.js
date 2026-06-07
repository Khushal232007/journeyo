import fs from 'fs';

try {
  const content = fs.readFileSync('extracted_char_m.js', 'utf8');
  const cleanCode = content.replace('module.exports =', '');
  const m = new Function(`return ${cleanCode}`)();
  console.log("Loaded Char Dham array:", JSON.stringify(m, null, 2));
} catch (err) {
  console.error(err);
}
