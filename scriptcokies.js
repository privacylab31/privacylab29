document.getElementById('cookies-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    openCookiesNotice();
});

function openCookiesNotice() {
    // Open a new window
    const cookiesWindow = window.open("", "Cookies Notice", "width=800,height=600");

    if (!cookiesWindow) {
        alert("Failed to open new window. Please check your popup blocker settings.");
        return;
    }

    // Write the necessary HTML to the new window
    cookiesWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cookies Notice</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .otnotice { margin-top: 20px; }
            </style>
            <!-- OneTrust Cookies Consent Notice start for privacylab31.github.io -->
<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="01910774-292a-731f-9870-e4edf891f6bb" ></script>
<script type="text/javascript">
function OptanonWrapper() { }
</script>
<!-- OneTrust Cookies Consent Notice end for privacylab31.github.io -->
        </head>
        <body>
        </body>
        </html>
    `);
    // Close the document to finish writing and render the content
    cookiesWindow.document.close();
}
