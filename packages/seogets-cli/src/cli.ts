import { readPackageJson } from '@mirage-cli/utils';
import { Command } from 'commander';

const program = new Command();

program
  .version(readPackageJson(__dirname).version)
  .option('-h, --help', 'display help for command')
  .parse(process.argv);

if (program.opts().help) {
  program.help();
}