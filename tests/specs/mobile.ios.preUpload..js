var wd = require('wd');
// Input capabilities
const capabilities = {
  'device': 'iPhone 12',
  'realMobile': 'true',
  'os_version': '14.0',
  'browserName': 'iPhone',
  'name': 'BStack-[NodeJS] Sample Test',
  'build': 'BStack Build Number 1',
  "nativeWebTap": true,
}
async function runTestWithCaps() {
  let driver = wd.promiseRemote("https://divamanojg_Pgtbdy:k7LGdEBCyLVYQyHoksap@hub-cloud.browserstack.com/wd/hub");
  await driver.init(capabilities);
  await driver.get("https://the-internet.herokuapp.com/upload")
  await new Promise(r => setTimeout(r, 2000));
  element = await driver.waitForElementById('file-upload')
  await element.click()
  await driver.context('NATIVE_APP')
  element = await driver.waitForElementByName('Photo Library')
  await element.click()
  await new Promise(r => setTimeout(r, 2000));
  element = await driver.elementsByClassName('XCUIElementTypeImage')
  await element[0].click()
  await new Promise(r => setTimeout(r, 5000));
  element = await driver.waitForElementByName('Choose')
  await element.click()
  await new Promise(r => setTimeout(r, 10000));
  contexts = await driver.contexts();
  await driver.context(contexts[1])
  element = await driver.waitForElementById("file-submit")
  await element.click()
  await driver.quit();
}
runTestWithCaps();