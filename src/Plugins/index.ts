import storeLocalHistory from './LocalHistory';

// register all plugins
const plugin = (on: (task: string, config: unknown) => void): void => {
  on('task', {
    storeLocalHistory,
  });

  // if running in AWS lambda, set the necessary args so that cypress can start a chromium based browser
  if (process.env.AWS_LAMBDA === '1') {
    on(
      'before:browser:launch',
      (browser: Cypress.Browser, browserLaunchOptions: Cypress.BeforeBrowserLaunchOptions) => {
        if (browser.family === 'chromium') {
          browserLaunchOptions.args.push(
            '--no-sandbox',
            '--no-zygote',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-gpu',
            '--disable-software-rasterizer',
            '--disable-dev-shm-usage',
          );
        }

        return browserLaunchOptions;
      },
    );
  }
};

export default plugin;
