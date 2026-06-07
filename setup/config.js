const { Command } = require('commander');
const program = new Command();

// ... existing code ...

program
  .command('npm-publisher-setup')
  .option('-h, --help', 'display help for command')
  .action((options) => {
    if (options.help) {
      console.log('Usage: npm-publisher-setup [options]');
      console.log('Options:');
      console.log('  -h, --help     display help for command');
      process.exit(0);
    }
    // ... existing code ...
    checkNpmLogin();
    // ... existing code ...
  });

// ... existing code ...

module.exports = program;