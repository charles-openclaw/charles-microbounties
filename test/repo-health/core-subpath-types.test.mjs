import { test } from 'node:test';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const corePackageJson = JSON.parse(readFileSync(new URL('../packages/core/package.json', import.meta.url), 'utf8'));

test('core subpaths have types conditions', () => {
  const subpaths = [
    './directives',
    './context',
    './task',
    './client-router',
    './lazy-loader',
    './testing',
  ];

  for (const subpath of subpaths) {
    const exportConfig = corePackageJson.exports[subpath];
    if (!exportConfig || !exportConfig.types) {
      throw new Error(`Missing types condition for subpath ${subpath}`);
    }
  }
});