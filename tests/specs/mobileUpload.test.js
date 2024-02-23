var wd = require('wd');
// Input capabilities
const capabilities = {
  browserName: 'safari',
  platformName: 'iOS',
  platformVersion: '15.0',
  deviceName: 'iPhone 14',
  automationName: 'XCUITest',
  safariAllowPopups: true,
  safariIgnoreFraudWarning: true,
  fullContextList: true,
  safariLogAllCommunication: true,
  safariLogAllCommunication: true,
  acceptInsecureCerts: true,
}
async function runTestWithCaps () {
  let driver = wd.promiseRemote("https://sekarmanoj_XeuqF4:ceKAXjhwv15aHzPBm6pE@hub-cloud.browserstack.com/wd/hub");
  await driver.init(capabilities);
  await driver.get("https://the-internet.herokuapp.com/upload")
  await new Promise(r => setTimeout(r, 2000));
  element = await driver.waitForElementById('file-upload')
  // await element.click()
  
  let convertedData = "./Files/123.png";
let pathData= "/Internal Storage/DCIM/123.png";
   // Push file to device (custom method)
   await driver.pushFile(pathData, convertedData);

   await element.sendKeys("/private/var/mobile/Media/DCIM/IMG_0001.PNG")
   // Switch to Native_App context
  //  const contexts = await driver.getContexts();
  //  const nativeContext = contexts.find(context => context.includes('NATIVE_APP'));
  //  await driver.switchContext(nativeContext);
  // await driver.context('NATIVE_APP')
  // element = await driver.waitForElementByName('Photo Library')
  // await element.click()
  //  await new Promise(r => setTimeout(r, 20000));
  // element = await driver.elementsByClassName('XCUIElementTypeImage')
  // await element[0].click()
  // await new Promise(r => setTimeout(r, 5000));
  // element = await driver.waitForElementByName('Choose')
  // await element.click()
  // await new Promise(r => setTimeout(r, 10000));
  // contexts = await driver.contexts();
  // await driver.context(contexts[1])
  // element = await driver.waitForElementById("file-submit")
  // await element.click()
  // await new Promise(r => setTimeout(r, 2000));
  // await driver.quit();
}
runTestWithCaps();