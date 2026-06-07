import { execSync } from 'child_process';
import { VERSION } from '../src/version';

describe('CLI', () => {
  it('should print the correct version', () => {
    const output = execSync('node ./bin/anchor-debug --version', { encoding: 'utf8' });
    expect(output.trim()).toBe(VERSION);
  });
});