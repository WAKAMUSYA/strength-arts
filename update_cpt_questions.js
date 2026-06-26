const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'data', 'cptQuestions.ts');
let content = fs.readFileSync(file, 'utf8');

// Add import
if (!content.includes('import { cptBlock5Questions }')) {
    content = content.replace('import { cptAssessmentQuestions } from "./cptAssessmentQuestions";', 'import { cptAssessmentQuestions } from "./cptAssessmentQuestions";\nimport { cptBlock5Questions } from "./cptBlock5Questions";');
}

// Change blockIds 6, 7, 8, 9 to 5
content = content.replace(/blockId:\s*6,/g, 'blockId: 5,');
content = content.replace(/blockId:\s*7,/g, 'blockId: 5,');
content = content.replace(/blockId:\s*8,/g, 'blockId: 5,');
content = content.replace(/blockId:\s*9,/g, 'blockId: 5,');

// Append the new questions array to the exports
if (!content.includes('...cptBlock5Questions')) {
    content = content.replace('...cptAssessmentQuestions,', '...cptAssessmentQuestions,\n  ...cptBlock5Questions,');
}

fs.writeFileSync(file, content);
console.log('Successfully updated cptQuestions.ts');
