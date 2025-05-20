// Function to detect browser name and version from navigator object
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    const appName = navigator.appName;
    const appVersion = navigator.appVersion;

    let browserName = appName;
    let version = appVersion;

    // More accurate browser detection using userAgent string
    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/([0-9\.]+)/)[1];
    } else if (userAgent.indexOf("Chrome") > -1) {
        // Check if it's Edge Chromium first
        if(userAgent.indexOf("Edg") > -1) {
            browserName = "Microsoft Edge";
            version = userAgent.match(/Edg\/([0-9\.]+)/)[1];
        } else {
            browserName = "Google Chrome";
            version = userAgent.match(/Chrome\/([0-9\.]+)/)[1];
        }
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Safari";
        version = userAgent.match(/Version\/([0-9\.]+)/)[1];
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        const msie = userAgent.match(/MSIE ([0-9\.]+)/);
        const trident = userAgent.match(/rv:([0-9\.]+)/);
        if(msie) {
            version = msie[1];
        } else if(trident) {
            version = trident[1];
        }
    }

    return { browserName, version };
}

function displayBrowserInfo() {
    const infoDiv = document.getElementById("browser-info");
    const { browserName, version } = getBrowserInfo();
    infoDiv.textContent = `You are using ${browserName} version ${version}`;
}

// Run on page load
window.onload = displayBrowserInfo;
