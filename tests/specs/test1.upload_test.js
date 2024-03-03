const wd = require('wd');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
async function runTestWithCaps() {
  // Define BrowserStack capabilities
  const capabilities = {
    'device': 'iPhone 12',
    'realMobile': 'true',
    'os_version': '14.0',
    'browserName': 'iPhone',
    'name': 'BStack-[NodeJS] Sample Test',
    'build': 'BStack Build Number 1',
    'UIFileSharingEnabled': true,
    'LSSupportsOpeningDocumentsInPlace': true

  };

  // Initialize WebDriver with BrowserStack capabilities
  let driver = wd.promiseRemote("https://divamanojg_Pgtbdy:k7LGdEBCyLVYQyHoksap@hub-cloud.browserstack.com/wd/hub");
  await driver.init(capabilities);

  await driver.get("https://the-internet.herokuapp.com/upload")

  // async function getFileBuffer(url) {
  //   const response = await axios.get(url, { responseType: 'arraybuffer' });
  //   return Buffer.from(response.data, 'binary');
  // }

  // // Usage example
  // const fileUrl = 'https://drive.google.com/file/d/13CyODOmrAVPWwTQkTOTZH4xTdTy_Vtxn/view?usp=sharing';
  // const buffer = await getFileBuffer(fileUrl);
  const element = await driver.waitForElementById('file-upload');


  // console.log(buffer,"-*****************************************************")
  // Upload the file
  // await driver.setFileDetector(new wd.FileDetector());
  // await driver.execute('mobile:fileSelector', { selector: 'input[type="file"]', files: [buffer.toString('base64')] });
  // await element.sendKeys(buffer);


  let localPath = "./Files/123.png";
  let mobilePath = "/private/var/mobile/Media/DCIM/*.png"
  await driver.pushFile(mobilePath, localPath);
  await element.sendKeys(mobilePath);
  // Click the upload button
  const uploadButton = await driver.elementById('file-submit');
  await uploadButton.click();


  // const mobilePath = "/private/var/mobile/Media/DCIM/";

  // // Function to get list of files in a directory
  // function getFilesInDirectory(directoryPath) {
  //   return new Promise((resolve, reject) => {
  //     fs.readdir(directoryPath, (err, files) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(files);
  //       }
  //     });
  //   });
  // }

  // // Construct full path to DCIM directory
  // const fullMobilePath = __dirname + mobilePath; // Assuming mobilePath is relative to the current directory

  // // Get list of files inside DCIM directory
  // getFilesInDirectory(fullMobilePath) // Pass the full path to the function
  //   .then(files => {
  //     console.log("Files inside DCIM directory:");
  //     console.log(files);
  //   })
  //   .catch(err => {
  //     console.error("Error reading directory:", err);
  //   });
}

runTestWithCaps();
