const { Command } = require('commander');
const pkg = require('../package.json');
const mcpServer = require('./mcp-server');

const program = new Command();

program
  .version(pkg.version)
  .option('-h, --help', 'display help for command')
  .option('-v, --version', 'display version for command');

program.parse(process.argv);

if (program.opts().help || program.opts().version) {
  program.help();
  process.exit(0);
}

if (process.argv.length > 2 && !process.argv[2].startsWith('-')) {
  console.error('Unknown command:', process.argv[2]);
  program.help();
  process.exit(1);
}

if (!process.env.DT_ENVIRONMENT) {
  console.error('Please set DT_ENVIRONMENT environment variable to your Dynatrace Platform Environment');
  process.exit(1);
}

mcpServer.start();