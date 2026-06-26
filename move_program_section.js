const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'lab', 'benchpress', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// The marker we added earlier for the program section
const programStart = `{/* ----------------- SECTION PROGRAM: 実践プログラム ----------------- */}`;
// It ends right before SECTION 3
const section3Start = `{/* ----------------- SECTION ③: 基本から順番に読む「ロードマップ」 ----------------- */}`;

const startIndex = content.indexOf(programStart);
const endIndex = content.indexOf(section3Start);

if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
    // Extract the program section block (including its newlines)
    const programBlock = content.substring(startIndex, endIndex);
    
    // Remove it from the current location
    content = content.substring(0, startIndex) + content.substring(endIndex);
    
    // Now find the end of SECTION 5 (悩み・壁)
    const section6Start = `{/* ----------------- SECTION ⑥: 学術研究レビュー ----------------- */}`;
    const insertIndex = content.indexOf(section6Start);
    
    if (insertIndex !== -1) {
        // Insert the program block right before section 6
        content = content.substring(0, insertIndex) + programBlock + content.substring(insertIndex);
        fs.writeFileSync(file, content);
        console.log('Successfully moved Practical Programs section under Obstacle section.');
    } else {
        console.log('Could not find SECTION 6 marker to insert before.');
    }
} else {
    console.log('Could not find Practical Programs section or SECTION 3 marker.');
}
