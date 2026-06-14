```json
{
  "files": {
    "package.json": {
      "content": "{\n  \"name\": \"shora-ai-payment-sdk\",\n  \"version\": \"2.2.0\",\n  \"description\": \"Shora AI Payment SDK\",\n  \"main\": \"./dist/cjs/index.js\",\n  \"module\": \"./dist/esm/index.js\",\n  \"types\": \"./dist/cjs/index.d.ts\",\n  \"type\": \"commonjs\",\n  \"exports\": {\n    \".\": {\n      \"import\": \"./dist/cjs/index.js\",\n      \"require\": \"./dist/cjs/index.js\",\n      \"types\": \"./dist/cjs/index.d.ts\"\n    },\n    \"./package.json\": \"./package.json\"\n  },\n  \"scripts\": {\n    \"build\": \"npm run build:cjs && npm run build:esm\",\n    \"build:cjs\": \"tsc -p tsconfig.cjs.json\",\n    \"build:esm\": \"tsc -p tsconfig.esm.json\",\n    \"test\": \"jest\"\n  },\n  \"keywords\": [\n    \"payment\",\n    \"sdk\",\n    \"ai\"\n  ],\n  \"author\": \"Shora\",\n  \"license\": \"MIT\",\n  \"devDependencies\": {\n    \"typescript\": \"^5.0.0\",\n    \"jest\": \"^29.0.0\",\n    \"ts-jest\": \"^29.0.0\"\n  }\n}"
    }
  }
}
```