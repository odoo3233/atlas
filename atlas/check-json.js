const fs = require('fs');

function checkJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    console.log(`✅ ${filePath} is valid JSON`);
    return true;
  } catch (error) {
    console.log(`❌ ${filePath} has error: ${error.message}`);
    return false;
  }
}

console.log('Checking JSON files...\n');

const files = [
  'src/translations/ar.json',
  'src/translations/en.json',
  'src/translations/zh.json'
];

let allValid = true;
files.forEach(file => {
  if (!checkJSON(file)) {
    allValid = false;
  }
});

if (allValid) {
  console.log('\n✅ All JSON files are valid!');
} else {
  console.log('\n❌ Some JSON files have errors');
}
