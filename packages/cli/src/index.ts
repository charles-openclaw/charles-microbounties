import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

// Read version from package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
const VERSION = packageJson.version;

const program = new Command();

program
  .version(VERSION)
  .description('Sessionstellar CLI');

// ... rest of the code remains the same ...