const { Command } = require('commander');
const program = new Command();

// ... existing code ...

program
  .command('npm-publisher')
  .option('-h, --help', 'display help for command')
  .action((options) => {
    if (options.help) {
      showHelp();
      process.exit(0);
    }
    // ... existing code ...
  });

// ... existing code ...

function showHelp() {
  console.log('Usage: npm-publisher [options]');
  console.log('Options:');
  console.log('  -h, --help     display help for command');
  // ... existing code ...
}

module.exports = program;