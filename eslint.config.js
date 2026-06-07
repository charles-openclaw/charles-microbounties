const path = require('path');
const fs = require('fs');

let config = {
  // existing config...
};

try {
  const storybookPlugin = require('eslint-plugin-storybook');
  config.plugins = {
    ...config.plugins,
    storybook: storybookPlugin,
  };
  config.extends = [...(config.extends || []), 'plugin:storybook/recommended'];
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    // Storybook plugin is not installed, skip it
  } else {
    throw error;
  }
}

module.exports = config;