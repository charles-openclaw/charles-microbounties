import { test } from 'node:test';
import { execSync } from 'child_process';

test('version flag', () => {
  const versionOutput = execSync('node cli.ts --version').toString();
  const packageJson = require('../package.json');
  const expectedVersion = packageJson.version;
  console.assert(versionOutput.includes(expectedVersion));
});

test('help flag', () => {
  const helpOutput = execSync('node cli.ts --help').toString();
  console.assert(helpOutput.includes('Usage:'));
});