document.getElementById('privacy-notice-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    openPrivacyNotice();
});

function openPrivacyNotice() {
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
   
<!-- OneTrust Privacy Notice start -->
  <!-- Language Drop-down element that will control in which language the Privacy Notice is displayed -->
  <div class="ot-privacy-notice-language-dropdown-container"></div>
  <!-- Container in which the Privacy Notice will be rendered -->
  <div id="otnotice-739f41b1-d5dc-4961-bf66-e97ac5c19c88" class="otnotice"></div>

  <script src="https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js" type="text/javascript" charset="UTF-8" id="otprivacy-notice-script">
      settings="eyJjb250ZW50QXBpVXJsIjoiaHR0cHM6Ly9wcml2YWN5cG9ydGFsLWluLm9uZXRydXN0LmNvbS9yZXF1ZXN0L3YxL2VudGVycHJpc2Vwb2xpY3kvZGlnaXRhbHBvbGljeS9jb250ZW50IiwibWV0YWRhdGFBcGlVcmwiOiJodHRwczovL3ByaXZhY3lwb3J0YWwtaW4ub25ldHJ1c3QuY29tL3JlcXVlc3QvdjEvZW50ZXJwcmlzZXBvbGljeS9kaWdpdGFscG9saWN5L21ldGEtZGF0YSJ9"
    </script>

  <script type="text/javascript" charset="UTF-8">
      // To ensure external settings are loaded, use the Initialized promise:
      OneTrust.NoticeApi.Initialized.then(function() {
        OneTrust.NoticeApi.LoadNotices(["https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/739f41b1-d5dc-4961-bf66-e97ac5c19c88/draft/privacynotice.json"]);
      });
    </script>

  <!-- OneTrust Privacy Notice end -->

   
</body>
</html>
`;

    // Create a Blob object representing the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });

    // Create a URL for the Blob and open it in a new tab
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}













