import { runServer } from './server';
import { parseArgs } from './args';

const args = parseArgs();

if (args.version || args.help) {
  if (args.version) {
    console.log(`@alchemy/mcp-server version: ${require('../package.json').version}`);
  }
  if (args.help) {
    console.log('Usage: mcp-server-alchemy [options]');
    console.log('');
    console.log('Options:');
    console.log('  -v, --version  output the version number');
    console.log('  -h, --help     display help for command');
  }
  process.exit(0);
}

runServer();