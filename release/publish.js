const fs = require('fs');
const childProcess = require('child_process');
const tmp = require('tmp');

// Create a temporary directory for the clean install test
const tmpDir = tmp.dirSync().name;

// Create a new npm project in the temporary directory
childProcess.execSync('npm init -y', { cwd: tmpDir });

// Install the package in the temporary directory
childProcess.execSync('npm install --ignore-scripts --no-audit --no-fund @tenonhq/dovetail-claude-plans@0.0.23', { cwd: tmpDir });

// If the installation is successful, the package is ready to be published
console.log('Clean install test passed. Package is ready to be published.');