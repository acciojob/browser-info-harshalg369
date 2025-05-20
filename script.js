function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    const appName = navigator.appName;
    const appVersion = navigator.appVersion;

    let browserName = appName;
    let version = appVersion;

    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        version = userAgent.match(/Firefox\/([0-9\.]+)/)[1];
    } else if (userAgent.indexOf("Chrome") > -1) {
        if(userAgent.indexOf("Edg") > -1) {
            browserName = "Microsoft Edge";
            version = userAgent.match(/Edg\/([0-9\.]+)/)[1];
        } else {
            browserName = "Google Chrome";
            version = userAgent.match(/Chrome\/([0-9\.]+)/)[1];
        }
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
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

window.onload = displayBrowserInfo;
