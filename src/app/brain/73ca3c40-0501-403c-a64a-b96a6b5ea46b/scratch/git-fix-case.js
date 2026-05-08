const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function gitMove(oldPath, newPath) {
  if (oldPath === newPath) return;
  console.log(`Git MV: ${oldPath} -> ${newPath}`);
  
  // To handle case-only changes on Mac/Windows, we need a temp name
  const tempPath = newPath + '_temp';
  try {
    execSync(`git mv "${oldPath}" "${tempPath}"`);
    execSync(`git mv "${tempPath}" "${newPath}"`);
  } catch (e) {
    console.error(`Failed to move ${oldPath}: ${e.message}`);
  }
}

// We need to walk the REAL filesystem and compare with what Git thinks
function walk(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const relPath = path.relative(process.cwd(), fullPath);
    
    // Check what git thinks this path is
    try {
      const gitPath = execSync(`git ls-files "${relPath}"`).toString().trim();
      if (gitPath && gitPath !== relPath) {
        gitMove(gitPath, relPath);
      }
    } catch (e) {}

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    }
  });
}

walk(path.join(process.cwd(), 'public', 'visuels'));
