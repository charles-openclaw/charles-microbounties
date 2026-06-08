import { Command } from 'commander';
import { loadPackageMetadata } from './package-meta';

const program = new Command();

program
  .version(loadPackageMetadata().version, '-v, --version', 'output the version number')
  .command('version', 'output the version number');

// ... rest of the cli.ts code