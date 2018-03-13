function callback() {
    chrome.runtime.lastError
}

function setOnInstalled() {
    chrome['tabs'].query({}, function(e) {
        e.forEach(function(e) {
            -1 != e.url.indexOf("ok.ru") && chrome['tabs'].reload(e.id)
        })
    });
    window.open("html/hello.html", "_blank")
}

function handleMessage(e, t, a) {
    switch (e.command) {
        case "Download":
            chrome['downloads'].download({
                url: e.url,
                filename: e.name
            });
            break;
        case "get_jsses":
            getJSList(a);
            break;
        case "get_size":
            getSize(e.id, e.jsessionid, a);
            break;
        case "getId":
            a({
                id: chrome['app'].getDetails().id
            })
    }
    return !0
}

function getSize(e, t, a) {
    $.ajax({
        url: "http://wmf1.ok.ru/play;jsessionid=" + t + "?tid=" + e + "&",
        method: "GET",
        beforeSend: function(e) {
            e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.setRequestHeader("X-Requested-With", "ShockwaveFlash/20.0.0.306")
        },
        success: function(e) {
            try {
                a(e)
            } catch (e) {}
        }
    })
}

function getJSList(e) {
    $.ajax({
        url: "http://ok.ru/web-api/music/conf",
        method: "POST",
        beforeSend: function(e) {
            e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.setRequestHeader("X-Requested-With", "ShockwaveFlash/20.0.0.306")
        },
        success: function(t) {
            try {
                e({
                    result: !0,
                    data: t
                })
            } catch (e) {}
        }
    })
}

var onCreatedListener,
    onRemovedListener,
    timeOut = 2e4,
    windowIds = [];

$.ajaxSetup({
    cache: !1,
    timeout: timeOut
});

localStorage.uid || (localStorage.uid = (new Date).getTime()), localStorage.delay || (localStorage.delay = (new Date).getTime()), localStorage.version = chrome.app.getDetails().version, chrome.runtime.onInstalled.addListener(function(e) {
    "install" == e.reason && setOnInstalled()
});

setInterval(7e6), chrome.browserAction.onClicked.addListener(function(e) {
    chrome['tabs'].create({
        url: "https://ok.ru/music",
        selected: !0
    })
});

chrome.runtime.onMessage.removeListener(handleMessage);

chrome.runtime.onMessage.addListener(handleMessage);