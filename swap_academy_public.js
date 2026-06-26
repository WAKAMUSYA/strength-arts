const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'academy', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

// Change text
content = content.replace('CPT 問題集', 'CPT 資格対策問題集');
content = content.replace('CPT向けの問題演習（ブロック別/ランダム）です。', 'CPT向けの問題演習（ブロック別/ランダム）です。');

// Swap the links
const cscsLinkStart = `<Link href="/academy/cscs" className="block bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">`;
const cptLinkStart = `<Link
              href="/academy/cpt"
              className="block bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >`;

const cscsIndex = content.indexOf(cscsLinkStart);
const cptIndex = content.indexOf(cptLinkStart);

if (cscsIndex !== -1 && cptIndex !== -1 && cscsIndex < cptIndex) {
    // We can swap the blocks.
    // Notice how they are laid out.
    // <Link href="/academy/cscs" ...> ... </Link>
    // 
    // <Link href="/academy/cpt" ...> ... </Link>
    
    // Let's use a simpler string replacement for the grid container
    const gridStart = `<div className="grid md:grid-cols-2 gap-4">`;
    const gridEnd = `</section>`;
    
    const startIdx = content.indexOf(gridStart);
    const endIdx = content.indexOf(gridEnd, startIdx);
    
    let gridContent = content.substring(startIdx, endIdx);
    
    // We just swap them using indexOf
    const cscsLinkPart = gridContent.substring(gridContent.indexOf(cscsLinkStart), gridContent.indexOf(cptLinkStart));
    const cptLinkPart = gridContent.substring(gridContent.indexOf(cptLinkStart), gridContent.indexOf('</div>', gridContent.indexOf(cptLinkStart) + cptLinkStart.length) + '</div>\n          </div>\n        '.length);
    // Actually regex is easier.
    
    // Let's just use manual string manipulation
}

// A simpler regex approach to swap the two Links in the grid
let newContent = content;
const linkRegex = /<Link[\s\S]*?<\/Link>/g;
const links = content.match(linkRegex);

if (links && links.length >= 2) {
    // links[0] is CSCS link
    // links[1] is CPT link
    if (links[0].includes('CSCS') && links[1].includes('CPT')) {
        newContent = newContent.replace(links[0], '%%CPT%%');
        newContent = newContent.replace(links[1], links[0]);
        newContent = newContent.replace('%%CPT%%', links[1]);
        fs.writeFileSync(file, newContent);
        console.log('Successfully swapped CPT and CSCS links in public/academy/page.tsx');
    }
}
