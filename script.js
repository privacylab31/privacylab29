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
//<script src="https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js"
//      type="text/javascript" charset="UTF-8"
//        id="otprivacy-notice-script"
//        settings='{
//        "callbackUrl": "https://privacyportal-in.onetrust.com/request/v1/privacyNotices/states/views",
//        "contentApiUrl": "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/content",
//        "metadataApiUrl": "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/meta-data"
//      }'>
//</script>

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
      const containerEl = document.getElementById(notices[key].container);
      if (containerEl) {
        containerEl.style.display = key === selected ? "block" : "none";
      }
    }
  }

  // Load the notice based on country
  function loadNoticeForCountry(country) {
  showNoticeContainer(country);

  // Remove existing language dropdowns added by OneTrust
  const existingDropdowns = document.querySelectorAll(".ot-privacy-notice-language-dropdown");
  existingDropdowns.forEach(el => el.remove());

  // Wait for OneTrust API to be ready
  if (window.OneTrust && OneTrust.NoticeApi && OneTrust.NoticeApi.LoadNotices) {
    OneTrust.NoticeApi.LoadNotices([notices[country].url]);
  } else {
    setTimeout(() => loadNoticeForCountry(country), 500);
  }
}

  // On DOM ready, initialize dropdown and default notice
  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("country-select");
    dropdown.addEventListener("change", function () {
      loadNoticeForCountry(this.value);
    });
    // Load default country notice (USA)
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







