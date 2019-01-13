// The onClicked callback function.
function onClickHandler(info, tab) {
    const link = info.linkUrl;
    console.log(link);
    const url = `http://facebook.com/l.php?u=${encodeURIComponent(link)}`;
    console.log(url);
    chrome.tabs.create({ url: url });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(() => {
    const id = chrome.contextMenus.create({
        title: 'Open via facebook...',
        contexts: ['link'],
        id: 'contextLink',
    });
});
