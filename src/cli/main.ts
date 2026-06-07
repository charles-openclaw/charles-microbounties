import { Command } from 'commander';
import packageJson from '../package.json';

const buildProgram = () => {
  const program = new Command();

  // Add top-level version option
  program.version(packageJson.version);

  // ... rest of your code
};

export default buildProgram;