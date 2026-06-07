import { Command } from 'commander';
import { VERSION } from '../src/version';

const program = new Command();

program
  .version(VERSION)
  // ... rest of the code remains the same ...