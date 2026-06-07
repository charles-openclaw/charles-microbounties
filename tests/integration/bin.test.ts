import { exec } from 'child_process';
import { tmpdir } from 'os';
import { join } from 'path';

describe('bin', () => {
  it('should print help', async () => {
    const tmpDir = tmpdir();
    const cmd = `node ./src/bin.ts --help`;
    const result = await exec(cmd, { cwd: tmpDir });
    expect(result.stdout).toContain('Usage:');
  });

  it('should print version', async () => {
    const tmpDir = tmpdir();
    const cmd = `node ./src/bin.ts --version`;
    const result = await exec(cmd, { cwd: tmpDir });
    expect(result.stdout).toContain('0.4.0');
  });
});