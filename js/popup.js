
chrome.tabs.query({active: true}, function(tabs){
    var tab = tabs[0];

    var typeNumber = 0;
    var errorCorrectionLevel = 'M';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(tab.url);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createSvgTag(6, 8);
});
