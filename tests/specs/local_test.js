const axios = require('axios');
const fs = require('fs');

async function uploadMedia() {
    try {
        // Read the file as a buffer
        const fileBuffer = fs.readFileSync('/private/var/mobile/Media/DCIM/');

        // Make a POST request to upload the media
        const response = await axios.post('https://api-cloud.browserstack.com/app-automate/upload-media', {
            file: fileBuffer,
            custom_id: 'SampleFile'
        }, {
            auth: {
                username: 'sekarg_xJCsHI',
                password: 'QHQeGwMLGQVLBzxzdcWU'
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // Extract media URL from the response
        const mediaURL = response.data.media_url;
        console.log('Media uploaded successfully. Media URL:', mediaURL);

        // Set capabilities with media URL
        const capabilities = {
            'browserstack.uploadMedia': [`media://90c7a8h8dc82308108734e9a46c24d8f01de12881`]
        };
        console.log('Capabilities:', capabilities);
    } catch (error) {
        console.error('Error uploading media:', error.message);
    }
}

// Call the function to upload media and set capabilities
uploadMedia();
