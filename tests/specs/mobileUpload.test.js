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
async function runTestWithCaps() {
  let driver = wd.promiseRemote("https://sekarmanoj_XeuqF4:ceKAXjhwv15aHzPBm6pE@hub-cloud.browserstack.com/wd/hub");
  await driver.init(capabilities);
  await driver.get("https://the-internet.herokuapp.com/upload")
  element = await driver.waitForElementById('file-upload')
  const data = "./Files/123.png";
  // await driver.pushFile('/Chrome/Downloads/123.png', data);
  const fileUrl = 'https://drive.google.com/file/d/13CyODOmrAVPWwTQkTOTZH4xTdTy_Vtxn/view?usp=sharing';

  // Assuming 'element' represents the file input element
  // You would replace 'element' with the actual selector or WebDriverIO element reference
  const element = await $('input[type="file"]'); // Example selector, replace with your actual selector

  // Download the file from Google Drive and upload it
  await browser.executeAsync(async (fileUrl, element, done) => {
      try {
          // Fetch the file from the URL
          const response = await fetch(fileUrl);
          const blob = await response.blob();

          // Convert the file blob to base64
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
              // Set the file content to the file input element
              element.uploadFile(Buffer.from(reader.result.replace(/^data:.+;base64,/, ''), 'base64'));
              done();
          };
      } catch (error) {
          console.error('Error fetching or uploading file:', error);
          done();
      }
  }, fileUrl, element);

}
runTestWithCaps();