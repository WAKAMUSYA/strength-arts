const fs = require('fs');
const path = require('path');

const labDir = path.join(__dirname, 'app', '(public)', 'lab');
const dirs = ['chest', 'golf', 'hypertrophy', 'power', 'ziju'];

for (const cat of dirs) {
  const p = path.join(labDir, cat, '[slug]', 'page.tsx');
  if (fs.existsSync(p)) {
    let code = fs.readFileSync(p, 'utf8');
    code = code.replace(/import \{ notFound \} from 'next\/navigation'\r?\n/g, '');
    fs.writeFileSync(p, code);
  }
}
