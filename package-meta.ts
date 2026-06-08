import * as fs from 'fs';
import * as path from 'path';

export function loadPackageMetadata() {
  const packageJsonPath = path.join(__dirname, '../package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  return packageJson;
}