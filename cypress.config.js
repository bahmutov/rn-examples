const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      setupNodeEvents(on, config) {
        cypressSplit(on, config)
        // IMPORTANT: return the config object
        return config
      },
    },
  },
})
