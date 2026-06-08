import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

describe('cli', () => {
  it('should show help', () => {
    const result = spawnSync(join(__dirname, '../../node_modules/.bin/0g-mcp'), ['--help'], { encoding: 'utf8' });
    expect(result.stdout).toContain('Usage: 0g-mcp [options]');
  });

  it('should show version', () => {
    const result = spawnSync(join(__dirname, '../../node_modules/.bin/0g-mcp'), ['--version'], { encoding: 'utf8' });
    expect(result.stdout).toContain(`v${require('../../package.json').version}`);
  });

  it('should show help with -h', () => {
    const result = spawnSync(join(__dirname, '../../node_modules/.bin/0g-mcp'), ['-h'], { encoding: 'utf8' });
    expect(result.stdout).toContain('Usage: 0g-mcp [options]');
  });

  it('should show version with -V', () => {
    const result = spawnSync(join(__dirname, '../../node_modules/.bin/0g-mcp'), ['-V'], { encoding: 'utf8' });
    expect(result.stdout).toContain(`v${require('../../package.json').version}`);
  });
});