const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const exec = promisify(require('child_process').exec);

// ... (rest of the code remains the same)

async function createProject(projectName, options) {
  // ... (rest of the code remains the same)

  // Create project files
  await createProjectFiles(projectName, options);

  // Initialize Git repository if requested
  if (options.git) {
    await initGitRepository(projectName);
  }

  // Print next steps
  console.log(`✔ Successfully created ${projectName}!`);
  console.log('Next steps:');
  console.log(`  cd ${projectName}`);
  console.log(`  bun install     # Install dependencies`);
  console.log(`  bun run check   # Format and lint`);

  // Removed the automatic 'bun install' execution
  // await exec(`bun install`, { cwd: path.join(process.cwd(), projectName) });
}