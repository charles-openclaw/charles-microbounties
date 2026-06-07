const { test } = require('tap');
const { execSync } = require('child_process');
const pkg = require('../package.json');

test('help text includes version command', (t) => {
  const helpText = execSync('./bin/brainkit --help', { encoding: 'utf-8' });
  t.ok(helpText.includes('version'));
  t.end();
});

test('brainkit version prints package version', (t) => {
  const versionOutput = execSync('./bin/brainkit version', { encoding: 'utf-8' });
  t.equal(versionOutput.trim(), pkg.version);
  t.end();
});

test('brainkit --version prints package version', (t) => {
  const versionOutput = execSync('./bin/brainkit --version', { encoding: 'utf-8' });
  t.equal(versionOutput.trim(), pkg.version);
  t.end();
});