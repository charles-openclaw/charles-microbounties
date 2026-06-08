import { version } from '../package.json';

const handleCliMetadataRequest = async (args: string[]) => {
  if (args.includes('--version')) {
    console.log(version);
    return true;
  }

  if (args.includes('--help')) {
    console.log('Usage: mcp-searxng [options]');
    console.log('Options:');
    console.log('  --version  Print the version number');
    console.log('  --help     Print this help message');
    return true;
  }

  return false;
};

export { handleCliMetadataRequest };