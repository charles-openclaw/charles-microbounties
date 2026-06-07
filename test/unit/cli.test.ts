import { execSync } from 'child_process';

describe('CLI', () => {
  it('should print help and exit 0', () => {
    const result = execSync('node dist/proxy.js --help');
    expect(result.toString()).toContain('Usage: mcp-remote <url>');
    expect(result.toString()).toContain('Version:');
  });

  it('should print version and exit 0', () => {
    const result = execSync('node dist/proxy.js --version');
    expect(result.toString()).toContain('Version:');
  });

  it('should print help and exit 0 for client', () => {
    const result = execSync('node dist/client.js --help');
    expect(result.toString()).toContain('Usage: mcp-remote <url>');
    expect(result.toString()).toContain('Version:');
  });

  it('should print version and exit 0 for client', () => {
    const result = execSync('node dist/client.js --version');
    expect(result.toString()).toContain('Version:');
  });
});