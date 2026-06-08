import parseArgs from './args';

const main = async () => {
  const args = parseArgs(process.argv.slice(2));

  // ...
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});