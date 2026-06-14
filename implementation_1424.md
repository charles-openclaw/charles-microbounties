Based on the issue description, the problem lies in the `package.json` configuration of the `@svar-ui/react-core` package. The `main` and `exports` fields incorrectly reference `dist/index.cjs.js`, while the actual built file is `dist/index.cjs`.

Here is the corrected `package.json` file.

```json
{
  "name": "@svar-ui/react-core",
  "version": "2.6.0",
  "description": "Svar UI React Core Components",
  "main": "./dist/index.cjs",
  "module": "./dist/index.es.js",
  "types": "./types/index.d.ts",
  "exports": {
    ".": {
      "types": "./types/index.d.ts",
      "import": "./dist/index.es.js",
      "require": "./dist/index.cjs"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "types"
  ],
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "scripts": {
    "build": "rollup -c",
    "prepublishOnly": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/svar-widgets/react-core.git"
  },
  "keywords": [
    "react",
    "ui",
    "components"
  ],
  "author": "Svar UI Team",
  "license": "MIT"
}
```