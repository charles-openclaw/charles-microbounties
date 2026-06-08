import { Command } from 'commander';
import { startServer } from './server';

const program = new Command();

program
  .name('ui5mcp')
  .description('UI5 Message Channel Protocol Server')
  .version(require('../package.json').version);

// Check for help flags before parsing arguments
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  program.help();
  process.exit(0);
}

program.parse(process.argv);

if (program.args.length > 0) {
  console.error('Unexpected arguments: This command does not accept any arguments.');
  console.log('Usage: ui5mcp');
  process.exit(2);
}

startServer();