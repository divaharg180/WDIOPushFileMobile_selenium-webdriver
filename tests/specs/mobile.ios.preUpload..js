var wd = require('wd');
// Input capabilities
const capabilities = {
 'device' : 'iPhone 12',
 'realMobile' : 'true',
 'os_version' : '14.0',
 'browserName' : 'iPhone',
 'name': 'BStack-[NodeJS] Sample Test',
 'build': 'BStack Build Number 1',
  "nativeWebTap":true,
}
async function runTestWithCaps () {
  let driver = wd.promiseRemote("https://sekarg_xJCsHI:QHQeGwMLGQVLBzxzdcWU@hub-cloud.browserstack.com/wd/hub");  await driver.init(capabilities);
  await driver.get("https://support.staffbase.com/hc/en-us/article_attachments/360009197031/username.csv");
  await new Promise(r => setTimeout(r, 2000));
  await driver.context('NATIVE_APP');
  let element = await driver.waitForElementByName('Download');
  await element.click()
  let contexts = await driver.contexts();
  await driver.context(contexts[1]);
  await new Promise(r => setTimeout(r, 2000));
  await driver.get("https://the-internet.herokuapp.com/upload")
  await new Promise(r => setTimeout(r, 2000));
  element = await driver.waitForElementById('file-upload')
  await element.click()
  await driver.context('NATIVE_APP')
  element = await driver.waitForElementByName('Browse')
  await element.click()
  await new Promise(r => setTimeout(r, 2000));
  element = await driver.waitForElementByName('Recents')
  await element.click()
  element = await driver.waitForElementByXPath('//XCUIElementTypeCollectionView')
  await new Promise(r => setTimeout(r, 2000));
  let elements = await element.elementsByXPath("//XCUIElementTypeCell")
  await elements[0].click()
  contexts = await driver.contexts();
  await driver.context(contexts[1])
  element = await driver.waitForElementById("file-submit")
  await element.click()
  await driver.quit();
}
runTestWithCaps();