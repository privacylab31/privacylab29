<script>
document.getElementById('cookies-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    openCookiePrivacyNotice();
});

function openCookiePrivacyNotice() {
    // Full HTML content for the new tab
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cookie Policy</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px; 
                    margin: 0;
                    background-color: #f9f9f9;
                }
                h1 {
                    color: #333;
                }
                .otnotice { 
                    margin-top: 20px; 
                }
            </style>
            <!-- OneTrust Cookie Policy Script -->
            <div id="ot-sdk-cookie-policy"></div>
            </script>
        </head>
        <body>
            <h1>Cookie Policy</h1>
            
        </body>
        </html>
    `;

    // Create a Blob object for the HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });

    // Create a URL for the Blob and open in new tab
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}
</script>
