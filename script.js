document.getElementById('privacy-notice-link').addEventListener('click', function (event) {
    event.preventDefault();
    openPrivacyNoticePopup();
});

function openPrivacyNoticePopup() {
    const popup = window.open('', 'Privacy Notice', 'width=800,height=600');
    if (!popup) {
        alert('Popup blocked. Please allow popups for this site.');
        return;
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Privacy Notice</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .otnotice { margin-top: 20px; }
  </style>
</head>
<body>
  <label for="country-select"><strong>Select Country:</strong></label>
  <select id="country-select">
    <option value="usa">USA</option>
    <option value="canada">Canada</option>
  </select>

  <div class="ot-privacy-notice-language-dropdown-container"></div>
  <div id="otnotice-usa" class="otnotice"></div>
  <div id="otnotice-canada" class="otnotice" style="display:none;"></div>

  <script>
    const notices = {
      usa: {
        container: "otnotice-usa",
        url: "https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/54555007-d9a1-42f2-9700-2a5ca29f1434/published/privacynotice.json"
      },
      canada: {
        container: "otnotice-canada",
        url: "https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/3d3deaed-980b-4289-9f97-b9c00495af9b/published/privacynotice.json"
      }
    };

    function showNoticeContainer(country) {
      for (const key in notices) {
        document.getElementById(notices[key].container).style.display = key === country ? 'block' : 'none';
      }
    }

    function loadNotice(country) {
      if (window.OneTrust && OneTrust.NoticeApi && OneTrust.NoticeApi.LoadNotices) {
        OneTrust.NoticeApi.LoadNotices([notices[country].url]);
      } else {
        setTimeout(() => loadNotice(country), 500);
      }
    }

    function OptanonWrapper() {
      const selectedCountry = document.getElementById('country-select').value;
      showNoticeContainer(selectedCountry);
      loadNotice(selectedCountry);
    }

    window.addEventListener('DOMContentLoaded', function () {
      document.getElementById('country-select').addEventListener('change', function () {
        showNoticeContainer(this.value);
        loadNotice(this.value);
      });

      // ✅ Set OneTrust config via global object (required)
      window.OTPrivacyNoticeSettings = {
        callbackUrl: "https://privacyportal-in.onetrust.com/request/v1/privacyNotices/stats/views",
        contentApiUrl: "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/content",
        metadataApiUrl: "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/meta-data"
      };

      // ✅ Dynamically load the OneTrust script
      const script = document.createElement('script');
      script.src = 'https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js';
      script.type = 'text/javascript';
      script.charset = 'UTF-8';
      script.id = 'otprivacy-notice-script';
      document.body.appendChild(script);
    });
  </script>
</body>
</html>
`;

    popup.document.open();
    popup.document.write(html);
    popup.document.close();
}
