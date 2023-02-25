import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    fixturesFolder: false,
    defaultCommandTimeout: 500,
  },
});
