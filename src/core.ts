import { transform as typiaTransform } from 'typia/lib/transform';

// ... existing code ...

// Lazy-load the Typia transform function to support both Typia layouts
let transform: typeof typiaTransform;
try {
  transform = require('typia/lib/transform.js');
} catch (error: any) {
  if (error.code === 'ERR_PACKAGE_PATH_NOT_EXPORTED' || error.code === 'ERR_MODULE_NOT_FOUND') {
    transform = require('typia/lib/transform');
  } else {
    throw error;
  }
}

// ... existing code ...