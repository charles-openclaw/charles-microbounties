import { MCPServer } from './mcp-server';

const main = async () => {
  const server = new MCPServer();
  await server.start();
  console.log('Fanar Tools MCP Server starting...');
  console.log('Fanar Tools MCP Server running');
};

if (process.argv.includes('--help')) {
  console.log('Usage: fanar-mcp-tools [options]');
  console.log('Options:');
  console.log('  --help     Show this help message and exit.');
  console.log('  --version  Show the package version and exit.');
  process.exit(0);
} else if (process.argv.includes('--version')) {
  const packageJson = require('../package.json');
  console.log(`fanar-mcp-tools version ${packageJson.version}`);
  process.exit(0);
} else {
  main();
}