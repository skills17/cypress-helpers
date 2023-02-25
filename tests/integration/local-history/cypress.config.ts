import { defineConfig } from 'cypress';
import plugins from '../../../plugins';

export default defineConfig({
  e2e: {
    fixturesFolder: false,
    defaultCommandTimeout: 500,
    setupNodeEvents(on, config) {
      plugins(on, config);
    },
  },
});
