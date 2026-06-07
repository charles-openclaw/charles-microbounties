#!/usr/bin/env node
const { Command } = require('commander');
const pkg = require('../package.json');

const program = new Command();

program
  .version(pkg.version)
  .option('--help', 'display help')
  .parse(process.argv);

if (program.opts().help) {
  console.log('Usage: mcp-server-supabase [options]');
  console.log('');
  console.log('Options:');
  console.log('  -v, --version  output the version number');
  console.log('  -h, --help     display help for command');
  process.exit(0);
}

// Rest of your code...