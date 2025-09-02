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
      <!-- Country Selector -->
<div style="margin-bottom: 1rem;">
  <label for="notice-selector"><strong>Select Privacy Notice:</strong></label>
  <select id="notice-selector">
    <option value="usa">USA</option>
    <option value="global">Global</option>
  </select>
</div>

<!-- Notice Containers -->
<div id="privacy-notice-container">
  <!-- USA Privacy Notice -->
  <div id="otnotice-bd09463e-b148-44d4-91e5-3ee9328b729a" class="otnotice"></div>

  <!-- Global Privacy Notice (hidden by default) -->
  <div id="otnotice-54555007-d9a1-42f2-9700-2a5ca29f1434" class="otnotice" style="display:none;"></div>
</div>

<!-- OneTrust Privacy Notice Script -->
<script src="https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js"
        type="text/javascript"
        charset="UTF-8"
        id="otprivacy-notice-script"
        settings='{
          "callbackUrl":"https://privacyportal-in.onetrust.com/request/v1/privacyNotices/stats/views",
          "contentApiUrl":"https://privacyportal-in.onetrust.com/request/v1/enterprisePolicy/digitalpolicy/content",
          "metadataApiUrl":"https://privacyportal-in.onetrust.com/request/v1/enterprisePolicy/digitalpolicy/meta-data"
        }'>
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
  function showNoticeContainer(selected) {
    for (const key in notices) {
      const containerEl = document.getElementById(notices[key].container);
      if (containerEl) {
        containerEl.style.display = key === selected ? "block" : "none";
      }
    }
  }
   function loadNoticeForCountry(country) {
    showNoticeContainer(country);

    // Clear any previously rendered language dropdown
    const langDropdown = document.querySelector(".ot-privacy-notice-language-dropdown-container");
    if (langDropdown) langDropdown.innerHTML = "";

    // Wait for OneTrust API to be ready
    if (window.OneTrust && OneTrust.NoticeApi && OneTrust.NoticeApi.LoadNotices) {
      OneTrust.NoticeApi.LoadNotices([notices[country].url]);
    } else {
     setTimeout(() => loadNoticeForCountry(country), 500);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("country-select");
    dropdown.addEventListener("change", function () {
      loadNoticeForCountry(this.value);
    });
    // Load default country (USA) on first load
    // Load default country notice (USA)
    loadNoticeForCountry(dropdown.value);
  });
</script>


          </body>
        </html>
    `);

    // Close the document to finish writing and render the content
    privacyWindow.document.close();
}









