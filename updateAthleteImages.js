const fs = require('fs');

const file = 'c:\\Users\\wakam\\Desktop\\projects\\strength-arts\\data\\performanceArticles.ts';
let content = fs.readFileSync(file, 'utf8');

let counter = 1;

content = content.replace(/image: '.*?\.jpg'/g, (match) => {
  const replacement = `image: '/athlete/athlete${counter}.jpg'`;
  counter++;
  if (counter > 10) counter = 1;
  return replacement;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated images to use athlete folder.');
