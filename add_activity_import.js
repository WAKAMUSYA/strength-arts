const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'app', '(public)', 'lab', 'benchpress', 'articles', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');

const regex = /FileText\r?\n\} from 'lucide-react'/g;
const replacement = `FileText,\n  Activity\n} from 'lucide-react'`;

if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(file, content);
    console.log('Successfully added Activity to imports');
} else {
    console.log('Could not add Activity to imports.');
}
