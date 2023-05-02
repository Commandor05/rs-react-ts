import { defineConfig } from 'cypress';
import cyCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
      instrumentation: false,
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      cyCoverageTask(on, config);
      return config;
    },
    video: false,
  },
});
