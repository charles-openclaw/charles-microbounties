import { ConvexBlogCMS } from '../src/index.js';
import { argv } from 'process';

const showHelp = () => {
  console.log('Usage: blog-admin-serve [options]');
  console.log('Options:');
  console.log('  --help     Show this help message');
  console.log('  --version  Show the version number');
};

const showVersion = () => {
  console.log(require('../package.json').version);
};

if (argv.includes('--help')) {
  showHelp();
  process.exit(0);
}

if (argv.includes('--version')) {
  showVersion();
  process.exit(0);
}

const convexUrl = process.env.CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  console.error('Set CONVEX_URL or NEXT_PUBLIC_CONVEX_URL to your deployment...');
  process.exit(1);
}

const cms = new ConvexBlogCMS(convexUrl);
cms.serve();