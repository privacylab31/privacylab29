document.getElementById('cookies-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openCookiesNotice();
});

function openCookiesNotice() {
    // Open a new window
    const cookiesWindow = window.open("", "Cookies Notice", "width=800,height=600");

    if (!cookiesWindow) {
        alert("Failed to open new window. Please check your popup blocker settings.");
        return;
    }

    // Write the necessary HTML to the new window
    cookiesWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cookies Notice</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .otnotice { margin-top: 20px; }
            </style>
<!-- OneTrust Privacy Notice start -->
  <!-- Language Drop-down element that will control in which language the Privacy Notice is displayed -->
  <div class="ot-privacy-notice-language-dropdown-container"></div>
  <!-- Container in which the Privacy Notice will be rendered -->
  <div id="otnotice-8532c2e5-6f32-4fec-9772-3edcbdd453cd" class="otnotice"></div>
  <script src="https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js" type="text/javascript" charset="UTF-8" id="otprivacy-notice-script">
      settings="eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vcHJpdmFjeXBvcnRhbC1pbi5vbmV0cnVzdC5jb20vcmVxdWVzdC92MS9wcml2YWN5Tm90aWNlcy9zdGF0cy92aWV3cyIsImNvbnRlbnRBcGlVcmwiOiJodHRwczovL3ByaXZhY3lwb3J0YWwtaW4ub25ldHJ1c3QuY29tL3JlcXVlc3QvdjEvZW50ZXJwcmlzZXBvbGljeS9kaWdpdGFscG9saWN5L2NvbnRlbnQiLCJtZXRhZGF0YUFwaVVybCI6Imh0dHBzOi8vcHJpdmFjeXBvcnRhbC1pbi5vbmV0cnVzdC5jb20vcmVxdWVzdC92MS9lbnRlcnByaXNlcG9saWN5L2RpZ2l0YWxwb2xpY3kvbWV0YS1kYXRhIn0="
    </script>
  <script type="text/javascript" charset="UTF-8">
      // To ensure external settings are loaded, use the Initialized promise:
      OneTrust.NoticeApi.Initialized.then(function() {
        OneTrust.NoticeApi.LoadNotices(["https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/8532c2e5-6f32-4fec-9772-3edcbdd453cd/published/privacynotice.json"]);
      });
    </script>
  <!-- OneTrust Privacy Notice end -->
        </head>
        <body>
        </body>
        </html>
    `);
    // Close the document to finish writing and render the content
    cookiesWindow.document.close();
}
