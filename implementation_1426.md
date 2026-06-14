Here are the implementation files required to fix the issue. These files add the build configuration and update the package exports to point to compiled JavaScript instead of TypeScript source files.

### 1. `@ottorouter/ai-sdk/package.json`
Updates the entry points to use the `dist` folder and adds the build script.

```json
{
  "name": "@ottorouter/ai-sdk",
  "version": "0.2.8",
  "description": "AI SDK integration for Otto Router",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.js"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "build": "tsc --project tsconfig.build.json",
    "prepublishOnly": "npm run build",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "@ai-sdk/provider": "^1.0.0",
    "@ai-sdk/provider-utils": "^2.0.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  },
  "peerDependencies": {
    "ai": "^4.0.0"
  }
}
```

### 2. `@ottorouter/ai-sdk/tsconfig.build.json`
A dedicated build configuration that excludes test files and ensures strict output for the `dist` folder.

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noEmit": false,
    "emitDeclarationOnly": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```

### 3. `@ottocode/sdk/package.json`
Updates the entry points to use the `dist` folder, fixes the lazy loading of native dependencies, and adds the build script.

```json
{
  "name": "@ottocode/sdk",
  "version": "0.1.314",
  "description": "Core SDK for Otto Code execution",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.js"
    },
    "./builtin": {
      "types": "./dist/builtin/index.d.ts",
      "import": "./dist/builtin/index.js"
    },
    "./builtin/finish": {
      "types": "./dist/builtin/finish.d.ts",
      "import": "./dist/builtin/finish.js"
    },
    "./builtin/grep": {
      "types": "./dist/builtin/grep.d.ts",
      "import": "./dist/builtin/grep.js"
    },
    "./builtin/plan": {
      "types": "./dist/builtin/plan.d.ts",
      "import": "./dist/builtin/plan.js"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "build": "tsc --project tsconfig.build.json",
    "prepublishOnly": "npm run build",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "@ottorouter/ai-sdk": "^0.2.8",
    "zod": "^3.23.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/uuid": "^9.0.0"
  },
  "peerDependencies": {
    "ai": "^4.0.0"
  }
}
```

### 4. `@ottocode/sdk/tsconfig.build.json`
Build configuration ensuring the `dist` folder is populated correctly.

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noEmit": false,
    "emitDeclarationOnly": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"]
}
```

### 5. `@ottocode/sdk/src/index.ts` (Partial Fix)
Ensures that native dependencies (like `bun:ffi` or `.dylib`) are loaded lazily so they don't crash Node.js during the initial import of the SDK.

```typescript
// src/index.ts
import type { OttoConfig, OttoInstance } from './types';

// Lazy loader for native dependencies to prevent Node.js crashes
// when importing the package in environments without Bun or native libs
let _nativeLoader: (() => Promise<void>) | null = null;

const loadNativeDependencies = async () => {
  if (_nativeLoader) return _nativeLoader();

  try {
    // Attempt to load Bun FFI or native bindings only when actually needed
    // This prevents ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING and native load errors
    const { loadBunFFI } = await import('./native/bun-ffi');
    _nativeLoader = loadBunFFI;
    return loadBunFFI();
  } catch (error) {
    // Silently ignore if running in a pure Node environment where native libs aren't needed
    // or if the specific native module isn't present.
    // The SDK should still function for standard API calls.
    console.debug('Native dependencies not loaded (expected in pure Node environments):', error);
    _nativeLoader = async () => {};
    return Promise.resolve();
  }
};

export async function createOtto(config: OttoConfig): Promise<OttoInstance> {
  // Ensure native dependencies are ready before initializing runtime
  await loadNativeDependencies();

  // ... existing initialization logic ...
  return {} as OttoInstance;
}

// Re-export types and other modules
export * from './types';
export * from './builtin';
```

### 6. `@ottocode/sdk/src/builtin/index.ts` (Fixing Aliases)
Fixes the stale aliases mentioned in the issue to point to existing modules.

```typescript
// src/builtin/index.ts
export { finish } from './finish';
export { grep } from './grep';
export { plan } from './plan';

// Re-export types if necessary
export type { FinishOptions, GrepOptions, PlanOptions } from './types';
```