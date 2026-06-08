import { execSync } from 'child_process';

describe('version', () => {
  it('should report the correct version', () => {
    const version = execSync('node dist/index.js --version').toString().trim();
    const expectedVersion = require('../package.json').version;
    expect(version).toBe(expectedVersion);
  });
});