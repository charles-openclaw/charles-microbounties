const { Command } = require('commander');
const pkg = require('../package.json');

const program = new Command();

program
  .version(pkg.version)
  .option('-h, --help', 'display help for command')
  .option('-v, --version', 'display version for command');

program.parse(process.argv);