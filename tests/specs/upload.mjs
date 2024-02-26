import fetch from 'node-fetch';
import axios from 'axios';
import path from 'path';
import FormData from 'form-data';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import bgb from './../specs/apple.png'

// Construct the directory name from the URL of the import.meta
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Now construct the path to your file
const fileName = 'ball.doc'; // Replace 'yourfile.png' with your actual file name
const filePath = path.join(__dirname, fileName);
const userName = 'sekarmanoj_XeuqF4'; // Replace with your BrowserStack username
const accessKey = 'ceKAXjhwv15aHzPBm6pE'; // Replace with your BrowserStack access key
// const userName = 'YOUR_BROWSERSTACK_USERNAME'; // Your username
// const accessKey = 'YOUR_BROWSERSTACK_ACCESS_KEY'; // Your access key
console.log('filePath : ', filePath)
async function uploadFileToBrowserStack() {
  const url = 'https://api-cloud.browserstack.com/app-automate/upload';
  
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(userName + ':' + accessKey).toString('base64'),
    },
    body: formData,
  });

  const data = await response.json();

  if (response.ok) {
    console.log('File uploaded successfully:', data);
  } else {
    console.error('Failed to upload file:', data);
  }
}

async function uploadFile() {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));

  try {
    const response = await axios.post('https://api-cloud.browserstack.com/app-automate/upload', formData, {
      auth: {
        username: userName,
        password: accessKey,
      },
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.log('Upload successful:', response.data);
  } catch (error) {
    console.log(JSON.stringify(error))
    // console.error('Failed to upload file:', error.response.data);
  }
}

uploadFile();