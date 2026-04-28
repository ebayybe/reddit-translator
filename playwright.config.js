// Uses installed Chrome/Edge channels instead of downloading Playwright browsers.
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://www.reddit.com/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',
        headless: true,
      },
    },
    {
      name: 'msedge',
      use: {
        channel: 'msedge',
        headless: true,
      },
    },
  ],
};

module.exports = config;
