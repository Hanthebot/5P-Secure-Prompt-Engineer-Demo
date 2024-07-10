// Function to generate new session code
function generateSessionCode() {
    let newCode = Math.random().toString(36).substring(2, 9).toUpperCase();
    let newUrl = window.location.href.split("?")[0] + "?code=" + newCode;
    window.location.replace(newUrl);
}