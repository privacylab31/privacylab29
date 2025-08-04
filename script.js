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
 
<script type="text/javascript">
  // Map country value to Notice container ID and Notice JSON URL
  const notices = {
    usa: {
      container: "otnotice-54555007-d9a1-42f2-9700-2a5ca29f1434",
      url: "https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/54555007-d9a1-42f2-9700-2a5ca29f1434/published/privacynotice.json"
    },
    canada: {
      container: "otnotice-3d3deaed-980b-4289-9f97-b9c00495af9b",
      url: "https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/3d3deaed-980b-4289-9f97-b9c00495af9b/published/privacynotice.json"
    }
  };
 
  // Helper to show only the selected notice container
  function showNoticeContainer(selected) {
    for (const key in notices) {
      document.getElementById(notices[key].container).style.display = key === selected ? "block" : "none";
    }
  }
 
  // Initialize and handle country switching
  function loadNoticeForCountry(country) {
    showNoticeContainer(country);
    // Wait for OneTrust API to be ready
    if (window.OneTrust && OneTrust.NoticeApi && OneTrust.NoticeApi.LoadNotices) {
      OneTrust.NoticeApi.LoadNotices([notices[country].url]);
    } else {
      // Try again in 500ms if not ready yet
      setTimeout(() => loadNoticeForCountry(country), 500);
    }
  }
 
  // On dropdown change, switch notice
  document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("country-select");
    dropdown.addEventListener("change", function() {
      loadNoticeForCountry(this.value);
    });
    // Load default country (USA) on first load
    loadNoticeForCountry(dropdown.value);
  });
</script>
<!-- OneTrust Privacy Notice end -->
   

        </body>
        </html>
    `);

    // Close the document to finish writing and render the content
    privacyWindow.document.close();
}


