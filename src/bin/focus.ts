import { Command } from 'commander';
import { version } from '../package.json';

const program = new Command();

program
  .version(version)
  .usage('[command] [options]')
  .on('--help', () => {
    program.outputHelp();
    process.exit(0); // Explicit help flag exits 0
  });

// ... rest of the code remains the same ...