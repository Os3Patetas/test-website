import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 800,
  viewportWidth: 1500,
  video: false,
  defaultCommandTimeout: 20000,
  screenshotOnRunFailure: true,
  retries: 0,
  numTestsKeptInMemory: 15,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  pageLoadTimeout: 30000,
  responseTimeout: 30000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
  },
});
