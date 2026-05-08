const fs = require('fs');
const path = require('path');

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

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to find strings starting with /visuels/ inside quotes
  const regex = /"(\/visuels\/[^"]+)"|'(\/visuels\/[^']+)'/g;
  
  let changed = false;
  const newContent = content.replace(regex, (match, p1, p2) => {
    const original = p1 || p2;
    const slugified = slugify(original);
    if (original !== slugified) {
      console.log(`Slugifying: ${original} -> ${slugified}`);
      changed = true;
      return match.replace(original, slugified);
    }
    return match;
  });
  
  if (changed) {
    fs.writeFileSync(filePath, newContent);
  }
}

function walk(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (item !== 'node_modules' && item !== '.next') {
        walk(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      processFile(fullPath);
    }
  });
}

walk(path.join(process.cwd(), 'src'));
