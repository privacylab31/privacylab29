document.getElementById('privacy-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openPrivacyNotice();
});

function openPrivacyNotice() {

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
      <!-- OneTrust Privacy Notice start (Merged, with Country Dropdown) -->
<!-- Country Selection Dropdown -->
<div style="margin-bottom:16px;">
<label for="country-select" style="font-weight:bold;">Select Country: </label>
<select id="country-select">
<option value="usa">USA</option>
<option value="canada">Canada</option>
</select>
</div>
 
<!-- Language Drop-down for Privacy Notice (OneTrust renders this automatically) -->
<div class="ot-privacy-notice-language-dropdown-container"></div>
 
<!-- Notice Containers (only one shown at a time) -->
<div id="otnotice-54555007-d9a1-42f2-9700-2a5ca29f1434" class="otnotice"></div>
<div id="otnotice-3d3deaed-980b-4289-9f97-b9c00495af9b" class="otnotice" style="display:none"></div>
 
<!-- OneTrust JS (only include once!) -->
<script src="https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js"
        type="text/javascript" charset="UTF-8"
        id="otprivacy-notice-script"
        settings="eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vcHJpdmFjeXBvcnRhbC1pbi5vbmV0cnVzdC5jb20vcmVxdWVzdC92MS9wcml2YWN5Tm90aWNlcy9zdGF0cy92aWV3cyIsImNvbnRlbnRBcGlVcmwiOiJodHRwczovL3ByaXZhY3lwb3J0YWwtaW4ub25ldHJ1c3QuY29tL3JlcXVlc3QvdjEvZW50ZXJwcmlzZXBvbGljeS9kaWdpdGFscG9saWN5L2NvbnRlbnQiLCJtZXRhZGF0YUFwaVVybCI6Imh0dHBzOi8vcHJpdmFjeXBvcnRhbC1pbi5vbmV0cnVzdC5jb20vcmVxdWVzdC92MS9lbnRlcnByaXNlcG9saWN5L2RpZ2l0YWxwb2xpY3kvbWV0YS1kYXRhIn0=">
</script>
 

</script>
<!-- OneTrust Privacy Notice end -->

          </body>
        </html>
    `);

    // Close the document to finish writing and render the content
    privacyWindow.document.close();
}











