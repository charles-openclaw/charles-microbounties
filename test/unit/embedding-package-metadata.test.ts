import { readFileSync } from 'fs';
import { join } from 'path';

describe('package metadata', () => {
  it('should declare onnxruntime-common as a dependency', () => {
    const packageJson = JSON.parse(readFileSync(join(__dirname, '../../package.json'), 'utf8'));
    expect(packageJson.dependencies['onnxruntime-common']).toBe('^1.26.0');
  });

  it('should have onnxruntime-common in package-lock.json', () => {
    const packageLockJson = JSON.parse(readFileSync(join(__dirname, '../../package-lock.json'), 'utf8'));
    expect(packageLockJson.dependencies['onnxruntime-common']).toBeDefined();
    expect(packageLockJson.dependencies['onnxruntime-common'].version).toBe('1.26.0');
  });
});