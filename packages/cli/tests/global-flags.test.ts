import { execSync } from 'child_process';
import { join } from 'path';

describe('global flags', () => {
  it('should print version with --version', () => {
    const output = execSync(`${join(__dirname, '../../dist/index.js')} --version`).toString();
    expect(output.trim()).toBe(require('../../package.json').version);
  });

  it('should print version with -v', () => {
    const output = execSync(`${join(__dirname, '../../dist/index.js')} -v`).toString();
    expect(output.trim()).toBe(require('../../package.json').version);
  });

  it('should print help with --help', () => {
    const output = execSync(`${join(__dirname, '../../dist/index.js')} --help`).toString();
    expect(output).toContain('Usage:');
  });
});