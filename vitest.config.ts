import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true, // Use global test APIs like describe/it
    include: ['tests/**/*.test.ts', 'tests/**/*.test.tsx'], // Include test files in specified directories
    environment: 'jsdom', // Use 'jsdom' for testing browser code
    setupFiles: ['tests/setup-tests.ts'], // Automatically imports jest-dom before each test
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'lcov'], // Generates various coverage reports, including a JSON summary
      reportsDirectory: 'coverage' // Directory to output coverage files
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
