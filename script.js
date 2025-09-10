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
    <!-- OneTrust Privacy Notice start (Merged, with Country Dropdown) -->

    <!-- Country Selection Dropdown -->
    <div style="margin-bottom:16px;">
        <label for="country-select" style="font-weight:bold;">Select Country: </label>
        <select id="country-select">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="global">Global</option>
        </select>
    </div>

    <!-- Language Drop-down for Privacy Notice (OneTrust renders this automatically) -->
    <div class="ot-privacy-notice-language-dropdown-container"></div>

    <!-- Notice Containers (only one shown at a time) -->
    <div id="otnotice-54555007-d9a1-42f2-9700-2a5ca29f1434" class="otnotice"></div>
    <div id="otnotice-3d3deaed-980b-4289-9f97-b9c00495af9b" class="otnotice" style="display:none"></div>
    <div id="otnotice-bd09463e-b148-44d4-91e5-3ee9328b729a" class="otnotice" style="display:none"></div>

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
            },
            global: {
                container: "otnotice-bd09463e-b148-44d4-91e5-3ee9328b729a",
                url: "https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/bd09463e-b148-44d4-91e5-3ee9328b729a/published/privacynotice.json"
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
            
            // Remove old language dropdown content to prevent duplicates
            const langDropdownContainer = document.querySelector('.ot-privacy-notice-language-dropdown-container');
            if (langDropdownContainer) {
                langDropdownContainer.innerHTML = ''; // Clears previous dropdowns
            }

            // Wait for OneTrust API to be ready
            if (window.OneTrust && OneTrust.NoticeApi && OneTrust.NoticeApi.LoadNotices) {
                OneTrust.NoticeApi.LoadNotices([notices[country].url]);
            } else {
                // Try again in 500ms if not ready yet
                setTimeout(() => loadNoticeForCountry(country), 500);
            }
        }

        // On dropdown change, switch notice
        document.addEventListener("DOMContentLoaded", function () {
            const dropdown = document.getElementById("country-select");
            dropdown.addEventListener("change", function () {
                loadNoticeForCountry(this.value);
            });

            // Load default country (USA) on first load
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





