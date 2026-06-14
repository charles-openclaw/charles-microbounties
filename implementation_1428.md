Based on the issue description, the fix requires updating the `package.json` file in the `@winsznx/lend402` repository to include an `import` condition in the `exports` map. This allows Node.js ESM consumers to resolve the package root correctly.

Here is the implementation code for the updated `package.json`:

```json
{
  "name": "@winsznx/lend402",
  "version": "0.1.6",
  "description": "Lend402 SDK",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.js",
      "default": "./dist/index.js"
    }
  },
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "keywords": [
    "lend402",
    "sdk"
  ],
  "author": "winsznx",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/winsznx/lend402sdk.git"
  },
  "bugs": {
    "url": "https://github.com/winsznx/lend402sdk/issues"
  },
  "homepage": "https://github.com/winsznx/lend402sdk#readme",
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### Key Changes Made:
1.  **Added `exports` map**: Defined the root export (`"."`) explicitly.
2.  **Added `import` condition**: Points to `./dist/index.js`, enabling `import` statements in ESM environments.
3.  **Added `types` condition**: Points to `./dist/index.d.ts`, ensuring TypeScript resolution works for both module systems.
4.  **Preserved `require` condition**: Maintains compatibility with CommonJS `require()` calls.
5.  **Added `default` condition**: Acts as a fallback for other resolution scenarios.

This configuration satisfies the requirement where `node --input-type=module -e "await import('@winsznx/lend402')"` will now successfully resolve the module without throwing `ERR_PACKAGE_PATH_NOT_EXPORTED`.