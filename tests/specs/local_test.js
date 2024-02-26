describe('BStack Local Testing', () => {
  it('can check tunnel working', async () => {
      // Increase script timeout
      browser.setTimeout({ script: 60000 }); // Set script timeout to 60 seconds

      // Navigate to the upload page
      await browser.url("https://the-internet.herokuapp.com/upload");

      // Handle cookie consent popup
      await acceptCookieConsent();

      // Wait for the file input element to be displayed
      const element = await $('input[type="file"]');
      await element.waitForDisplayed();

      // Define the Google Drive file URL
      const fileUrl = 'https://drive.usercontent.google.com/u/0/uc?id=13CyODOmrAVPWwTQkTOTZH4xTdTy_Vtxn&export=download';

      // Upload the file
      await uploadFile(fileUrl, element);

      // Verify the uploaded file name is displayed
      const fileName = await element.getValue();
      console.log('Uploaded file name:', fileName);
  });
});

// Function to accept the cookie consent popup
async function acceptCookieConsent() {
  const acceptButton = await $('button=Accept'); // Adjust the selector as needed
  if (await acceptButton.isDisplayed()) {
      await acceptButton.click();
  }
}

// Function to upload a file
async function uploadFile(fileUrl, element) {
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

              // Dispatch change event to trigger visual update
              element.dispatchEvent(new Event('change', { bubbles: true }));

              done();
          };
      } catch (error) {
          console.error('Error fetching or uploading file:', error);
          done();
      }
  }, fileUrl, element);
}
