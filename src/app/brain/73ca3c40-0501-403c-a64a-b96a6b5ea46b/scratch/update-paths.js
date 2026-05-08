const fs = require('fs');
const path = require('path');

const mappingFile = path.join(process.cwd(), 'image-mapping.json');
const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));

// Sort keys by length descending to avoid partial replacement issues
const sortedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);

function updateFiles(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      updateFiles(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      sortedKeys.forEach(oldPath => {
        if (content.includes(oldPath)) {
          console.log(`Updating ${oldPath} in ${fullPath}`);
          // Replace all occurrences
          const regex = new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          content = content.replace(regex, mapping[oldPath]);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  });
}

updateFiles(path.join(process.cwd(), 'src'));
