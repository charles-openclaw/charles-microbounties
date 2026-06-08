import { Command } from 'commander';
import { version } from '../../package.json';

const cli = new Command();

cli.version(version, '-V, --version', 'output the version number');

// ... rest of the code remains the same ...