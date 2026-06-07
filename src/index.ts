import { argv } from 'process';
import { spawnSync } from 'child_process';

// ... existing code ...

function main() {
  // Check for help/version flags before token validation
  if (argv.includes('--help')) {
    console.log('justoneapi-mcp help message');
    process.exit(0);
  } else if (argv.includes('--version')) {
    console.log('justoneapi-mcp version');
    process.exit(0);
  }

  // Existing token validation and startup code
  if (!process.env.JUSTONEAPI_TOKEN) {
    console.error('[justoneapi-mcp] ERROR: JUSTONEAPI_TOKEN is required but not set...');
    process.exit(1);
  }

  // ... existing code ...
}

main();