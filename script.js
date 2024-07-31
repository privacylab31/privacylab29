document.getElementById('privacy-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openPrivacyNotice();
});

function openPrivacyNotice() {
    // Open a new window
    const privacyWindow = window.open("", "Privacy Notice", "width=800,height=600");

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
            <!-- OneTrust Privacy Notice start -->
            <div id="otnotice-f2c0c589-b6d5-4886-b809-979a17338412" class="otnotice"></div>

            <script src="https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js" type="text/javascript" charset="UTF-8" id="otprivacy-notice-script">
                settings="eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vcHJpdmFjeXBvcnRhbC1pbi5vbmV0cnVzdC5jb20vcmVxdWVzdC92MS9wcml2YWN5Tm90aWNlcy9zdGF0cy92aWV3cyJ9"
            </script>

            <script type="text/javascript" charset="UTF-8">
                // To ensure external settings are loaded, use the Initialized promise:
                OneTrust.NoticeApi.Initialized.then(function() {
                    OneTrust.NoticeApi.LoadNotices(["https://privacyportal-in-cdn.onetrust.com/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/f2c0c589-b6d5-4886-b809-979a17338412.json"]);
                });
            </script>
            <!-- OneTrust Privacy Notice end -->
        </body>
        </html>
    `);

    // Close the document to finish writing and render the content
    privacyWindow.document.close();
}
