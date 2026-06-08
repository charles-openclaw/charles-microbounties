import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

describe('CLI version', () => {
  it('should match package.json version', () => {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8'));
    const versionOutput = execSync(path.join(__dirname, '../../dist/cli.js'), ['--version']).toString().trim();
    expect(versionOutput).toBe(packageJson.version);
  });
});