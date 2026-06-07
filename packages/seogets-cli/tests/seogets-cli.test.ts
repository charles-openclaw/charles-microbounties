import { execSync } from 'child_process';
import { readPackageJson } from '@mirage-cli/utils';

describe('seogets-cli', () => {
  it('should print the correct version', () => {
    const version = readPackageJson(__dirname).version;
    const output = execSync(`${__dirname}/../dist/bin.js --version`, { encoding: 'utf-8' });
    expect(output.trim()).toBe(version);
  });
});