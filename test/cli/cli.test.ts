import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { bin } from '../src/cli/main';

describe('CLI', () => {
  it('should print version with --version', () => {
    const result = spawnSync(bin, ['--version'], { encoding: 'utf8' });
    expect(result.status).toBe(0);
    expect(result.stdout.trim()).toBe(require('../package.json').version);
  });

  // ... rest of your tests
});