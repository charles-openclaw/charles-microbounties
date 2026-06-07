const { spawnSync } = require('child_process');
const path = require('path');

describe('CLI flags', () => {
  it('should display help message with --help flag', () => {
    const result = spawnSync(path.join(__dirname, '../dist/index.js'), ['--help'], {
      encoding: 'utf8',
    });
    expect(result.status).toBe(0);
    expect(result.stdout).toContain('justoneapi-mcp help message');
  });

  it('should display version with --version flag', () => {
    const result = spawnSync(path.join(__dirname, '../dist/index.js'), ['--version'], {
      encoding: 'utf8',
    });
    expect(result.status).toBe(0);
    expect(result.stdout).toContain('justoneapi-mcp version');
  });

  it('should exit with error code 1 when JUSTONEAPI_TOKEN is not set', () => {
    const result = spawnSync(path.join(__dirname, '../dist/index.js'), [], {
      encoding: 'utf8',
      env: { ...process.env, JUSTONEAPI_TOKEN: '' },
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('[justoneapi-mcp] ERROR: JUSTONEAPI_TOKEN is required but not set...');
  });
});