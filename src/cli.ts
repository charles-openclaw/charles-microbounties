import { Command } from 'commander';
import { validateEnvironmentVariables } from './utils/validateEnvironmentVariables';
import { version } from '../package.json';

const program = new Command();

program
  .version(version)
  .option('--help', 'display help for command')
  .option('--version', 'display version for command');

program.parse(process.argv);

if (program.opts().help || program.opts().version) {
  // If help or version flag is provided, do not validate environment variables
  if (program.opts().version) {
    console.log(version);
  } else {
    program.help();
  }
  process.exit(0);
}

// Validate environment variables for other commands
validateEnvironmentVariables();