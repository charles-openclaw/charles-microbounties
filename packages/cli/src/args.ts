import { parse } from 'arg';
import { version } from '../package.json';

const parseArgs = (argv: string[]) => {
  const args = parse(argv, {
    // ...
  });

  // Handle --version before first-run inference and command dispatch
  if (args['--version'] || args['-v'] && !args.verbose) {
    if (args['--json'] || args['--format'] === 'json') {
      console.log(JSON.stringify({ version }));
    } else {
      console.log(version);
    }
    process.exit(0);
  }

  // ...
};

export default parseArgs;