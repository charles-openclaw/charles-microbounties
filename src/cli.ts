import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf8'));

const program = new Command();

program
  .version(packageJson.version || '0.1.0')
  // ... rest of the code remains the same ...