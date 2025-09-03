document.getElementById('privacy-notice-link').addEventListener('click', function(event) {
    event.preventDefault();
    openPrivacyNotice();
});

function openPrivacyNotice() {
    // Open the popup window immediately in response to user click (to avoid popup blockers)
    const popup = window.open('', 'Privacy Notice', 'width=800,height=600');
    if (!popup) {
        alert('Popup blocked or failed – please allow popups.');
        return;
    }

    // Define basic HTML structure; include only inline script to handle UI logic
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <title>Privacy Notice</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .otnotice { margin-top: 20px; }
            </style>
        </head>
        <body>
            <div>
                <label for="country-select"><strong>Select Country:</strong></label>
                <select id="country-select">
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                </select>
            </div>
            <div class="ot-privacy-notice-language-dropdown-container"></div>
            <div id="otnotice-usa" class="otnotice"></div>
            <div id="otnotice-canada" class="otnotice" style="display:none;"></div>

            <script>
                const notices = {
                    usa: {
                        container: 'otnotice-usa',
                        url: 'https://privacyportal-in-cdn.onetrust.com/.../privacynotice.json'
                    },
                    canada: {
                        container: 'otnotice-canada',
                        url: 'https://privacyportal-in-cdn.onetrust.com/.../privacynotice.json'
                    }
                };

                function showNotice(country) {
                    Object.keys(notices).forEach(c => {
                        document.getElementById(notices[c].container).style.display = c === country ? 'block' : 'none';
                    });
                }

                function loadNotice(country) {
                    if (window.OneTrust && OneTrust.NoticeApi && OneTrust.NoticeApi.LoadNotices) {
                        OneTrust.NoticeApi.LoadNotices([notices[country].url]);
                    }
                }

                document.getElementById('country-select').addEventListener('change', function() {
                    const country = this.value;
                    showNotice(country);
                    loadNotice(country);
                });

                // Insert OneTrust script dynamically
                const script = document.createElement('script');
                script.src = 'https://privacyportal-in-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js';
                script.id = 'ot-script';
                script.charset = 'UTF-8';
                script.type = 'text/javascript';
                script.onload = () => {
                    const initial = document.getElementById('country-select').value;
                    showNotice(initial);
                    loadNotice(initial);
                };
                document.body.appendChild(script);
            </script>
        </body>
        </html>
    `;

    // Write the HTML to the popup window
    popup.document.open();
    popup.document.write(html);
    popup.document.close();
}
