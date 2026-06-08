// add integration coverage for UI runtime dependency metadata and real Node ESM/CJS loading of mongodb-mcp-server/ui
import { test } from 'vitest';
import { importModule } from './utils';

test('mongodb-mcp-server/ui is loadable', async () => {
  const uiModule = await importModule('mongodb-mcp-server/ui');
  expect(uiModule).toBeDefined();
});

test('mongodb-mcp-server/ui dependencies are installed', async () => {
  const dependencies = ['@lg-mcp/embeddable-uis', '@lg-mcp/hooks', 'react', 'react-dom'];
  for (const dependency of dependencies) {
    const module = await importModule(dependency);
    expect(module).toBeDefined();
  }
});