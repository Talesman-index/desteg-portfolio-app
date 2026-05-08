const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get all files in Git index with their exact casing
const gitFiles = execSync('git ls-files').toString().split('\n').filter(Boolean);

gitFiles.forEach(gitPath => {
  if (!gitPath.startsWith('public/visuels')) return;
  
  // Find the real path on disk (case-insensitive find)
  // On Mac, the filesystem is case-insensitive, so we can just check if relPath exists
  const relPath = gitPath.toLowerCase(); // This is what we WANT
  
  // Wait, my slugify script already changed the REAL filesystem to lowercase.
  // So 'gitPath' (index) is UPPERCASE and 'relPath' (disk) is lowercase.
  
  if (gitPath !== relPath) {
    console.log(`Fixing case: ${gitPath} -> ${relPath}`);
    const tempPath = relPath + '_temp';
    try {
      execSync(`git mv "${gitPath}" "${tempPath}"`);
      execSync(`git mv "${tempPath}" "${relPath}"`);
    } catch (e) {
      console.error(`Failed to move ${gitPath}: ${e.message}`);
    }
  }
});
