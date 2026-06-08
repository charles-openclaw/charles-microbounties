import { file, path } from '@shopify/cli-kit';

describe('cli-kit', () => {
  it('exports file and path namespaces', () => {
    expect(file).toBeDefined();
    expect(path).toBeDefined();
  });
});