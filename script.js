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

<div style="margin-bottom: 16px;">
<label for="country-select" style="font-weight: bold;">Select Country: </label>
<select id="country-select">
<option value="usa">USA</option>
<option value="global">Global</option>
</select>
</div>

<div class="ot-privacy-notice-language-dropdown-container"></div>

<div id="otnotice-54555007-d9a1-42f2-9700-2a5ca29f1434" class="otnotice"></div>
<div id="otnotice-bd09463e-b148-44d4-91e5-3ee9328b729a" class="otnotice" style="display: none;"></div>
 

<script 
    src="https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js"
    type="text/javascript" 
    charset="UTF-8"
    id="otprivacy-notice-script"
    settings='{
        "callbackUrl": "https://privacyportal-in.onetrust.com/request/v1/privacyNotices/stats/views",
        "contentApiUrl": "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/content",
        "metadataApiUrl": "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/meta-data"
    }'>
</script>
 
<script type="text/javascript">
    const notices = {
        usa: {
            container: "otnotice-54555007-d9a1-42f2-9700-2a5ca29f1434",
            url: "https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/54555007-d9a1-42f2-9700-2a5ca29f1434/published/privacynotice.json"
        },
        global: {
            container: "otnotice-bd09463e-b148-44d4-91e5-3ee9328b729a",
            url: "https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/bd09463e-b148-44d4-91e5-3ee9328b729a/published/privacynotice.json"
        }
    };

    function showNoticeContainer(selected) {
        for (const key in notices) {
            document.getElementById(notices[key].container).style.display = 
                key === selected ? "block" : "none";
        }
    }

    function loadNoticeForCountry(country) {
        showNoticeContainer(country);

        const langDropdownContainer = document.querySelector('.ot-privacy-notice-language-dropdown-container');
        if (langDropdownContainer) {
            langDropdownContainer.innerHTML = ''; // Clears previous dropdowns
        }

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

        loadNoticeForCountry(dropdown.value);
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









