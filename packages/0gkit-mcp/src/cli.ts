import { spawn } from 'node:child_process';
import { VERSION } from './server';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`0g-mcp v${VERSION}`);
  console.log('Usage: 0g-mcp [options]');
  console.log('');
  console.log('Options:');
  console.log('  -h, --help     Show help');
  console.log('  -V, --version  Show version');
  process.exit(0);
}

if (args.includes('--version') || args.includes('-V')) {
  console.log(`0g-mcp v${VERSION}`);
  process.exit(0);
}

// ... rest of the code remains the same ...