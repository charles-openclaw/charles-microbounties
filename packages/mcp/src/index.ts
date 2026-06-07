import { createServer } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { StdioServerTransport } from '@skillpkg/stdio-transport';
import * as yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
  .option('help', {
    alias: 'h',
    type: 'boolean',
    describe: 'Show help',
  })
  .option('version', {
    alias: 'v',
    type: 'boolean',
    describe: 'Show version',
  })
  .argv;

if (argv.help) {
  console.log('Usage: spm-mcp [options]');
  console.log('Options:');
  console.log('  -h, --help     Show help');
  console.log('  -v, --version  Show version');
  process.exit(0);
}

if (argv.version) {
  const packageJson = require('../package.json');
  console.log(`spm-mcp version ${packageJson.version}`);
  process.exit(0);
}

// ... rest of the code remains the same ...