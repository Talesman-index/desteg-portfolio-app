const fs = require('fs');
const path = require('path');

const rootDir = path.join(process.cwd(), 'public', 'visuels');

function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .toLowerCase()
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/[^\w\-\.\/]/g, '') // Remove special chars
    .replace(/\-+/g, '-') // Multiple hyphens to one
    .trim();
}

const mapping = {};

function renameRecursive(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const oldPath = path.join(dir, item);
    const stats = fs.statSync(oldPath);
    
    let newItem = slugify(item);
    // Ensure file extension remains intact
    if (!stats.isDirectory()) {
      const ext = path.extname(item);
      const name = path.basename(item, ext);
      newItem = slugify(name) + ext.toLowerCase();
    }
    
    const newPath = path.join(dir, newItem);
    
    if (oldPath !== newPath) {
      console.log(`Renaming: ${oldPath} -> ${newPath}`);
      fs.renameSync(oldPath, newPath);
    }
    
    // Store relative path mapping for code replacement
    const relOld = path.relative(path.join(process.cwd(), 'public'), oldPath);
    const relNew = path.relative(path.join(process.cwd(), 'public'), newPath);
    mapping['/' + relOld] = '/' + relNew;

    if (stats.isDirectory()) {
      renameRecursive(newPath);
    }
  });
}

// First pass: rename directories and files
// To avoid path issues, we do it in a way that doesn't break recursion
// Actually, simple recursive is fine if we process children after parent rename
renameRecursive(rootDir);

console.log('\n--- MAPPING FOR CODE UPDATE ---');
console.log(JSON.stringify(mapping, null, 2));

// Save mapping to a file for later use if needed
fs.writeFileSync('image-mapping.json', JSON.stringify(mapping, null, 2));
