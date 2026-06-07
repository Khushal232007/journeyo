import fs from 'fs';

const data = fs.readFileSync('mapsmyway_bundle.js', 'utf8');

// Let's print out all occurrences of keys matching "charDham..." or "tour..."
// The bundle has minified key-value fields. We can find keys like charDhamYamunotriTitle:"..."
// Let's write a regex that matches keys and double-quoted strings.
function getKeyValue(key) {
  // Try matching key:"value", key: 'value', "key": "value"
  const regexes = [
    new RegExp(`\\b${key}\\s*:\\s*"([^"]+)"`),
    new RegExp(`\\b${key}\\s*:\\s*'([^']+)'`),
    new RegExp(`"${key}"\\s*:\\s*"([^"]+)"`)
  ];
  for (const r of regexes) {
    const m = data.match(r);
    if (m) return m[1];
  }
  return null;
}

const keys = [
  // Char Dham Keys
  'charDhamSectionTitle', 'charDhamSectionSubtitle',
  'charDhamYamunotriTitle', 'charDhamYamunotriDesc',
  'charDhamGangotriTitle', 'charDhamGangotriDesc',
  'charDhamKedarnathTitle', 'charDhamKedarnathDesc',
  'charDhamBadrinathTitle', 'charDhamBadrinathDesc',
  
  // Tours Keys
  'tour1Title', 'tour1Desc', 'tour1Img', 'tour1Badge',
  'tour2Title', 'tour2Desc', 'tour2Img', 'tour2Badge',
  'tour3Title', 'tour3Desc', 'tour3Img', 'tour3Badge',
  'tour4Title', 'tour4Desc', 'tour4Img', 'tour4Badge'
];

keys.forEach(k => {
  const val = getKeyValue(k);
  console.log(`${k}: ${val}`);
});
