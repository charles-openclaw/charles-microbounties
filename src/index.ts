import { createServer } from './server';
import { createStdioTransport } from './stdio-transport';
import { createHttpTransport } from './http-transport';
import { handleCliMetadataRequest } from './cli-metadata-handler';

const main = async () => {
  const args = process.argv.slice(2);

  if (await handleCliMetadataRequest(args)) {
    return;
  }

  // ... rest of the code remains the same ...
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});