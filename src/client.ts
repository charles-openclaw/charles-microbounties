import { parse } from 'url';
import { version } from '../package.json';

// ... existing code ...

function parseCommandLineArgs(args: string[]) {
  // Check for metadata flags before parsing URL
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Usage: mcp-remote <url>`);
    console.log(`Version: ${version}`);
    process.exit(0);
  }

  if (args.includes('--version') || args.includes('-v')) {
    console.log(`Version: ${version}`);
    process.exit(0);
  }

  // ... existing URL parsing code ...
  const url = parse(args[0]);
  if (!url) {
    throw new Error('Invalid URL');
  }
  // ... existing code ...
}

// ... existing code ...