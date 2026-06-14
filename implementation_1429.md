### `packages/base/tsup.config.ts`

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/client-hooks-runtime.ts',
    'src/types/hooks.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  // Ensure the output structure matches the subpath exports
  // tsup will output:
  // dist/index.js, dist/index.d.ts
  // dist/client-hooks-runtime.js, dist/client-hooks-runtime.d.ts
  // dist/types/hooks.js, dist/types/hooks.d.ts
});
```

### `packages/base/package.json`

```json
{
  "name": "@armory-sh/base",
  "version": "0.2.38",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./client-hooks-runtime": {
      "types": "./dist/client-hooks-runtime.d.ts",
      "import": "./dist/client-hooks-runtime.js",
      "require": "./dist/client-hooks-runtime.cjs"
    },
    "./types/hooks": {
      "types": "./dist/types/hooks.d.ts",
      "import": "./dist/types/hooks.js",
      "require": "./dist/types/hooks.cjs"
    }
  },
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "tsup",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  },
  "devDependencies": {
    "tsup": "^8.0.0",
    "typescript": "^5.0.0",
    "vitest": "^1.0.0"
  },
  "peerDependencies": {
    "react": "^18.0.0"
  }
}
```

### `packages/base/src/client-hooks-runtime.ts`

```typescript
/**
 * Client-side hooks runtime implementation.
 * Previously this file was referenced directly from src/ in package.json exports,
 * causing ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING in Node ESM.
 * This file is now compiled to dist/ and exported via subpath.
 */

import { useEffect, useState } from 'react';

export interface HookRuntimeConfig {
  enabled: boolean;
  debug?: boolean;
}

export function useClientHook(config: HookRuntimeConfig = { enabled: true }) {
  const [state, setState] = useState<string>('initial');

  useEffect(() => {
    if (!config.enabled) return;

    const timer = setTimeout(() => {
      if (config.debug) {
        console.log('Client hook executed');
      }
      setState('active');
    }, 100);

    return () => clearTimeout(timer);
  }, [config.enabled, config.debug]);

  return { state, setState };
}

export const runtimeVersion = '0.2.38';
```

### `packages/base/src/types/hooks.ts`

```typescript
/**
 * Type definitions for hooks.
 * Previously this file was referenced directly from src/ in package.json exports,
 * causing ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING in Node ESM.
 * This file is now compiled to dist/ and exported via subpath.
 */

export interface BaseHookOptions {
  /** Unique identifier for the hook instance */
  id: string;
  /** Whether the hook should auto-retry on failure */
  autoRetry?: boolean;
  /** Maximum number of retry attempts */
  maxRetries?: number;
}

export interface HookResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  mutate: (data?: T) => Promise<void>;
}

export type HookFactory<T, O extends BaseHookOptions = BaseHookOptions> = (
  options: O
) => HookResult<T>;

export const HOOK_TYPES = {
  DATA: 'data',
  EVENT: 'event',
  STATE: 'state',
} as const;

export type HookType = (typeof HOOK_TYPES)[keyof typeof HOOK_TYPES];
```

### `packages/base/src/index.ts`

```typescript
/**
 * Main entry point for @armory-sh/base
 */

export { useClientHook, runtimeVersion } from './client-hooks-runtime';
export type {
  BaseHookOptions,
  HookResult,
  HookFactory,
  HookType,
} from './types/hooks';
export { HOOK_TYPES } from './types/hooks';

// Main package version
export const version = '0.2.38';
```