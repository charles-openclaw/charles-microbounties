import { version } from '../package.json';

// ... existing code ...

const cli = {
  // ... existing code ...
  version: version,
  // ... existing code ...
};

// ... existing code ...

const args = process.argv.slice(2);

if (args.includes('--version') || args.includes('-v')) {
  console.log(version);
  process.exit(0);
}

// ... existing code ...

const helpBanner = `
AgroPlan AI - CLI Local v${version}
`;

// ... existing code ...