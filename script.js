document.getElementById('privacy-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    showPrivacyNotice();
});

function showPrivacyNotice() {
    const container = document.getElementById('privacy-notice-container');
    container.style.display = 'block'; // Make the container visible

    // Check if the privacy notice script has already been added
    if (!document.getElementById('otprivacy-notice-script')) {
        const languageDropdownContainer = document.createElement('div');
        languageDropdownContainer.className = 'ot-privacy-notice-language-dropdown-container';

        const noticeContainer = document.createElement('div');
        noticeContainer.id = 'otnotice-0acfa4c8-075b-406a-bf09-be0d9785da5f';
        noticeContainer.className = 'otnotice';

        container.appendChild(languageDropdownContainer);
        container.appendChild(noticeContainer);

        const script = document.createElement('script');
        script.src = "https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js";
        script.type = "text/javascript";
        script.charset = "UTF-8";
        script.id = "otprivacy-notice-script";
        script.setAttribute('settings', JSON.stringify({
            callbackUrl: "https://privacyportal-in.onetrust.com/request/v1/privacyNotices/stats/views",
            contentApiUrl: "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/content",
            metadataApiUrl: "https://privacyportal-in.onetrust.com/request/v1/enterprisepolicy/digitalpolicy/meta-data"
        }));

        document.body.appendChild(script);

        const inlineScript = document.createElement('script');
        inlineScript.type = "text/javascript";
        inlineScript.charset = "UTF-8";
        inlineScript.text = `
            OneTrust.NoticeApi.Initialized.then(function() {
                OneTrust.NoticeApi.LoadNotices(["https://privacyportal-in-cdn.onetrust.com/storage-container/53ec83ca-0693-46f3-a55b-110c3f8f5a64/privacy-notices/0acfa4c8-075b-406a-bf09-be0d9785da5f/published/privacynotice.json"]);
            });
        `;
        container.appendChild(inlineScript);
    }
}
