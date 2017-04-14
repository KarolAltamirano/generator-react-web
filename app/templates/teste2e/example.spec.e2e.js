// @flow

import nightwatch from 'nightwatch';
import config from '../nightwatch.json';

describe('Page', () => {
  const client = nightwatch.initClient(config);
  const browser = client.api();

  after((done: Function) => {
    browser.end();
    client.start(done);
  });

  it('should have title "Project Title"', (done: Function) => {
    browser
      .useCss()
      .url(browser.launchUrl)
      .waitForElementVisible('body', 5000)
      .assert.title('Project Title');

    client.start(done);
  });

  it('should have counter set to 1', (done: Function) => {
    const xPathElement = '//*[@id="app"]/div/div[1]/span';

    browser
      .useXpath()
      .url(browser.launchUrl)
      .waitForElementPresent(xPathElement, 5000)
      .assert.containsText(xPathElement, '1');

    client.start(done);
  });

  it('should have counter set to 3', (done: Function) => {
    const xPathButton = '//*[@id="app"]/div/div[1]/button[1]';
    const xPathElement = '//*[@id="app"]/div/div[1]/span';

    browser
      .useXpath()
      .url(browser.launchUrl)
      .waitForElementPresent(xPathButton, 5000)
      .waitForElementPresent(xPathElement, 5000)
      .click(xPathButton)
      .assert.containsText(xPathElement, '3');

    client.start(done);
  });
});
