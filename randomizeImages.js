const fs = require('fs');

let content = fs.readFileSync('data/performanceArticles.ts', 'utf8');

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const basicImages = shuffle([1,2,3,4,5,6,7,8,9,10]);
const advancedImages = shuffle([1,2,3,4,5,6,7,8,9,10]);
const programImages = shuffle([1,2,3,4,5,6,7,8,9,10]);

let bIndex = 0;
let aIndex = 0;
let pIndex = 0;

content = content.replace(/"id":\s*"(perf-[bap]\d+)"[\s\S]*?"image":\s*"(\/athlete\/athlete\d+\.jpg)"/g, (match, id, oldImage) => {
  let newImage = oldImage;
  if (id.startsWith('perf-b')) {
    newImage = '/athlete/athlete' + basicImages[bIndex++] + '.jpg';
  } else if (id.startsWith('perf-a')) {
    newImage = '/athlete/athlete' + advancedImages[aIndex++] + '.jpg';
  } else if (id.startsWith('perf-p')) {
    newImage = '/athlete/athlete' + programImages[pIndex++] + '.jpg';
  }
  
  return match.replace(oldImage, newImage);
});

fs.writeFileSync('data/performanceArticles.ts', content, 'utf8');
console.log('Successfully randomized images for all sections.');
