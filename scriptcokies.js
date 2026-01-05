document.getElementById('cookies-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openCookiePrivacyNotice();
});

function openCookiePrivacyNotice() {
    // Generate the full HTML content
    const htmlContent = `
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
    `;

    // Create a Blob object representing the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    
   


    // Create a URL for the Blob and open in new tab
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

