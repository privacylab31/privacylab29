document.getElementById('privacy-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openPrivacyNotice();
});

function openPrivacyNotice() {
    // Open a new window
    const privacyWindow = window.open("", "Privacy Notice", "width=800,height=600");

    if (!privacyWindow) {
        alert("Failed to open new window. Please check your popup blocker settings.");
        return;
    }

    // Write the necessary HTML to the new window
    privacyWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Privacy Notice</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .otnotice { margin-top: 20px; }
            </style>
        </head>
        <body>
          

        </body>
        </html>
    `);

    // Close the document to finish writing and render the content
    privacyWindow.document.close();
}
