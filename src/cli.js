const { Command } = require('commander');
const pkg = require('../package.json');

const program = new Command();

program
  .version(pkg.version)
  .option('-v, --version', 'output the version number')
  .command('version', 'output the version number');

program.parse(process.argv);

if (program.args.length === 0) {
  if (program.version || program.opts().version) {
    console.log(pkg.version);
    process.exit(0);
  }
  program.help();
} else {
  const cmd = program.commands.find((c) => c.name() === program.args[0]);
  if (!cmd) {
    console.error(`Unknown command: ${program.args[0]}`);
    program.help();
    process.exit(1);
  }
  cmd.action();
}