import { parseConfig } from './config';
import { buildCli } from './cli';
import { version } from '../package.json';

const main = async () => {
  const rawArgs = process.argv.slice(2);

  // Check for top-level help/version flags before parsing config
  if (rawArgs.includes('-h') || rawArgs.includes('--help') || rawArgs.includes('-V') || rawArgs.includes('--version')) {
    const cli = buildCli();
    cli.version(version);
    await cli.parseAsync(rawArgs);
    return;
  }

  try {
    const config = parseConfig(rawArgs);
    // ... rest of the code remains the same ...
  } catch (error) {
    // ... error handling remains the same ...
  }
};

main();