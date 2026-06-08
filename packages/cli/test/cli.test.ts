import { exec } from 'child_process';
import { version } from '../package.json';

describe('CLI', () => {
  it('should print version', async () => {
    const result = await exec('node dist/bin/aiq.js --version');
    expect(result.stdout.trim()).toBe(version);
  });

  it('should print version in JSON format', async () => {
    const result = await exec('node dist/bin/aiq.js --version --json');
    expect(JSON.parse(result.stdout.trim())).toEqual({ version });
  });
});