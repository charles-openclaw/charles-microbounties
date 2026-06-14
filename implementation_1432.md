packages/metal-web-component/package.json
```json
{
  "name": "metal-web-component",
  "version": "2.16.9",
  "description": "Web Components built with Metal.js",
  "main": "lib/index.js",
  "module": "es/index.js",
  "jsnext:main": "es/index.js",
  "types": "types/index.d.ts",
  "scripts": {
    "build": "babel src --out-dir lib --source-maps --extensions \".js,.jsx\" && babel src --out-dir es --source-maps --extensions \".js,.jsx\" --presets babel-preset-metal-es6",
    "lint": "eslint src",
    "test": "karma start karma.conf.js",
    "test:ci": "karma start karma.conf.js --single-run --browsers ChromeHeadless",
    "prepublishOnly": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/metal/metal.js.git",
    "directory": "packages/metal-web-component"
  },
  "homepage": "https://github.com/metal/metal.js/tree/master/packages/metal-web-component#readme",
  "bugs": {
    "url": "https://github.com/metal/metal.js/issues"
  },
  "keywords": [
    "metal",
    "web-components",
    "custom-elements",
    "component"
  ],
  "author": "Metal.js Contributors",
  "license": "BSD-3-Clause",
  "dependencies": {
    "metal": "^2.20.0",
    "metal-element": "^2.16.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-metal-es6": "^2.16.0",
    "eslint": "^4.19.1",
    "eslint-config-metal": "^2.16.0",
    "karma": "^2.0.2",
    "karma-chrome-launcher": "^2.2.0",
    "karma-mocha": "^1.3.0",
    "karma-mocha-reporter": "^2.2.5",
    "mocha": "^5.1.1"
  },
  "files": [
    "lib",
    "es",
    "types",
    "src"
  ]
}
```