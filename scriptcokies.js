<script>
document.getElementById('cookies-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    openCookiePrivacyNotice();
});

function openCookiePrivacyNotice() {
    // Full HTML content for the new tab
    
            <!-- OneTrust Cookie Policy Script -->
            <div id="ot-sdk-cookie-policy"></div>
            </script>
        </head>
        <body>
            <h1>Cookie Policy</h1>
            
        </body>
        </html>
    `;

    // Create a Blob object for the HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });

    // Create a URL for the Blob and open in new tab
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}
</script>
