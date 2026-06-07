import { Command } from 'commander';

export function addCommands(program: Command) {
  // ... existing commands ...

  program
    .option('-v, --version', 'output the version number')
    .action((options) => {
      if (options.version) {
        console.log(VERSION);
        process.exit(0);
      }
    });
}