import { Command } from 'commander';
import { version } from '../package.json';

const program = new Command();

program
  .version(version, '-v, --version', 'output the version number')
  .parse(process.argv);

if (program.args.length === 0) {
  program.help();
}

// Rest of the code...