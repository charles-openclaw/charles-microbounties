import { execSync } from 'child_process';

describe('focus CLI', () => {
  it('should print help and exit 0 with --help flag', () => {
    const result = execSync('node dist/bin/focus.js --help', { encoding: 'utf-8' });
    expect(result).toContain('Usage:');
    expect(process.exitCode).toBe(0);
  });

  it('should print version and exit 0 with --version flag', () => {
    const result = execSync('node dist/bin/focus.js --version', { encoding: 'utf-8' });
    expect(result).toContain(version);
    expect(process.exitCode).toBe(0);
  });
});