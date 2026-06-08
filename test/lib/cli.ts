import { execSync } from 'child_process';

describe('CLI', () => {
  it('should print help and exit successfully', () => {
    const result = execSync('node ./bin/ui5mcp.js --help', { encoding: 'utf-8' });
    expect(result).toContain('Usage: ui5mcp');
  });

  it('should reject unknown arguments', () => {
    const result = execSync('node ./bin/ui5mcp.js foo', { encoding: 'utf-8' });
    expect(result).toContain('Unexpected arguments: This command does not accept any arguments.');
  });

  it('should start server without arguments', () => {
    const result = execSync('node ./bin/ui5mcp.js', { encoding: 'utf-8' });
    expect(result).not.toContain('Unexpected arguments');
  });
});