import { test, expect } from 'vitest';
import { Command } from 'commander';
import { version } from '../../package.json';

test('version flag', () => {
  const cli = new Command();
  cli.version(version, '-V, --version', 'output the version number');
  expect(cli.version()).toBe(version);
});