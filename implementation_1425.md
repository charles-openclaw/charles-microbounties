```json
{
  "name": "@ag-ui/claude-agent-sdk",
  "version": "0.0.3",
  "description": "Claude Agent SDK for AG-UI",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "lint": "eslint src --ext .ts"
  },
  "keywords": [
    "ag-ui",
    "claude",
    "agent",
    "sdk"
  ],
  "author": "AG-UI Protocol",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/ag-ui-protocol/ag-ui.git",
    "directory": "integrations/claude-agent-sdk/typescript"
  },
  "homepage": "https://github.com/ag-ui-protocol/ag-ui/tree/main/integrations/claude-agent-sdk/typescript",
  "bugs": {
    "url": "https://github.com/ag-ui-protocol/ag-ui/issues"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.24.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "eslint": "^8.0.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```