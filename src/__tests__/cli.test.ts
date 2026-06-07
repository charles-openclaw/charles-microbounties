import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

describe('CLI version', () => {
  it('should print the version from package.json', () => {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8'));
    const version = packageJson.version;

    const output = execSync(`node ./src/cli.ts --version`, { encoding: 'utf-8' });
    expect(output.trim()).toBe(version);
  });

  it('should handle version drift', () => {
    const tempPackageJson = { ...packageJson, version: '2.0.0' };
    fs.writeFileSync(path.join(__dirname, '../../package.json'), JSON.stringify(tempPackageJson, null, 2));

    const output = execSync(`node ./src/cli.ts --version`, { encoding: 'utf-8' });
    expect(output.trim()).toBe(tempPackageJson.version);

    fs.writeFileSync(path.join(__dirname, '../../package.json'), JSON.stringify(packageJson, null, 2));
  });
});