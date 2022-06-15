exports.config = {
  tests: 'login/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://automationparctice.com/index.php',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'live'
}