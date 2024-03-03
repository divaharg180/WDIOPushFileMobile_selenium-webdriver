var wd = require('wd');
// Input capabilities
const capabilities = {
  'device': 'Samsung Galaxy S20',
  'realMobile': 'true',
  'os_version': '14.0',
  'browserName': 'android',
  'name': 'BStack-[NodeJS] Sample Test',
  'build': 'BStack android push file and upload',
  "nativeWebTap": true
}
async function runTestWithCaps() {
  let driver = wd.promiseRemote("https://divamanojg_Pgtbdy:k7LGdEBCyLVYQyHoksap@hub-cloud.browserstack.com/wd/hub");  await driver.init(capabilities);
  await driver.get("https://the-internet.herokuapp.com/upload")
  await new Promise(r => setTimeout(r, 2000));
  const files = [
    { localPath: "./Files/123.png", mobilePath: "/sdcard/Pictures/123.png" },
    { localPath: "./Files/Report.pdf", mobilePath: "/sdcard/Pictures/Report.pdf" },
    { localPath: "./Files/rat.bmp", mobilePath: "/sdcard/Pictures/rat.bmp" },
    { localPath: "./Files/divahar.jpg", mobilePath: "/sdcard/Pictures/divahar.jpg" },
    { localPath: "./Files/cat.docx", mobilePath: "/sdcard/Pictures/cat.docx" },
    { localPath: "./Files/ball.doc", mobilePath: "/sdcard/Pictures/ball.doc" }
  ];

  const element = await driver.waitForElementById('file-upload');

  for (const file of files) {
    await driver.pushFile(file.mobilePath, file.localPath);
    await element.sendKeys(file.mobilePath);
  }
  const elementq = await driver.waitForElementById('file-submit');
  await elementq.click()

  //await browser.$('//*[@id="file-submit"]').click();
  // await driver.findElement(By.id("file-submit")).click();

}
runTestWithCaps();