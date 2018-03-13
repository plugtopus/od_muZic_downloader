function getMD5(e) {
    var t, o, n, i, s, r, a, u, d, c, l, m = function(e, t) {
            return e << t | e >>> 32 - t
        },
        f = function(e, t) {
            var o, n, i, s, r;
            return i = 2147483648 & e, s = 2147483648 & t, r = (1073741823 & e) + (1073741823 & t), (o = 1073741824 & e) & (n = 1073741824 & t) ? 2147483648 ^ r ^ i ^ s : o | n ? 1073741824 & r ? 3221225472 ^ r ^ i ^ s : 1073741824 ^ r ^ i ^ s : r ^ i ^ s
        },
        g = function(e, t, o, n, i, s, r) {
            return e = f(e, f(f((a = t) & o | ~a & n, i), r)), f(m(e, s), t);
            var a
        },
        w = function(e, t, o, n, i, s, r) {
            return e = f(e, f(f(t & (a = n) | o & ~a, i), r)), f(m(e, s), t);
            var a
        },
        v = function(e, t, o, n, i, s, r) {
            return e = f(e, f(f(t ^ o ^ n, i), r)), f(m(e, s), t)
        },
        h = function(e, t, o, n, i, s, r) {
            return e = f(e, f(f(o ^ (t | ~n), i), r)), f(m(e, s), t)
        },
        A = function(e) {
            var t, o = "",
                n = "";
            for (t = 0; t <= 3; t++) o += (n = "0" + (e >>> 8 * t & 255).toString(16)).substr(n.length - 2, 2);
            return o
        };
    for (a = 1732584193, u = 4023233417, d = 2562383102, c = 271733878, t = (l = function(e) {
        for (var t, o = e.length, n = o + 8, i = 16 * ((n - n % 64) / 64 + 1), s = new Array(i - 1), r = 0, a = 0; a < o;) r = a % 4 * 8, s[t = (a - a % 4) / 4] = s[t] | e.charCodeAt(a) << r, a++;
        return r = a % 4 * 8, s[t = (a - a % 4) / 4] = s[t] | 128 << r, s[i - 2] = o << 3, s[i - 1] = o >>> 29, s
    }(e)).length, o = 0; o < t; o += 16) n = a, i = u, s = d, r = c, u = h(u = h(u = h(u = h(u = v(u = v(u = v(u = v(u = w(u = w(u = w(u = w(u = g(u = g(u = g(u = g(u, d = g(d, c = g(c, a = g(a, u, d, c, l[o + 0], 7, 3614090360), u, d, l[o + 1], 12, 3905402710), a, u, l[o + 2], 17, 606105819), c, a, l[o + 3], 22, 3250441966), d = g(d, c = g(c, a = g(a, u, d, c, l[o + 4], 7, 4118548399), u, d, l[o + 5], 12, 1200080426), a, u, l[o + 6], 17, 2821735955), c, a, l[o + 7], 22, 4249261313), d = g(d, c = g(c, a = g(a, u, d, c, l[o + 8], 7, 1770035416), u, d, l[o + 9], 12, 2336552879), a, u, l[o + 10], 17, 4294925233), c, a, l[o + 11], 22, 2304563134), d = g(d, c = g(c, a = g(a, u, d, c, l[o + 12], 7, 1804603682), u, d, l[o + 13], 12, 4254626195), a, u, l[o + 14], 17, 2792965006), c, a, l[o + 15], 22, 1236535329), d = w(d, c = w(c, a = w(a, u, d, c, l[o + 1], 5, 4129170786), u, d, l[o + 6], 9, 3225465664), a, u, l[o + 11], 14, 643717713), c, a, l[o + 0], 20, 3921069994), d = w(d, c = w(c, a = w(a, u, d, c, l[o + 5], 5, 3593408605), u, d, l[o + 10], 9, 38016083), a, u, l[o + 15], 14, 3634488961), c, a, l[o + 4], 20, 3889429448), d = w(d, c = w(c, a = w(a, u, d, c, l[o + 9], 5, 568446438), u, d, l[o + 14], 9, 3275163606), a, u, l[o + 3], 14, 4107603335), c, a, l[o + 8], 20, 1163531501), d = w(d, c = w(c, a = w(a, u, d, c, l[o + 13], 5, 2850285829), u, d, l[o + 2], 9, 4243563512), a, u, l[o + 7], 14, 1735328473), c, a, l[o + 12], 20, 2368359562), d = v(d, c = v(c, a = v(a, u, d, c, l[o + 5], 4, 4294588738), u, d, l[o + 8], 11, 2272392833), a, u, l[o + 11], 16, 1839030562), c, a, l[o + 14], 23, 4259657740), d = v(d, c = v(c, a = v(a, u, d, c, l[o + 1], 4, 2763975236), u, d, l[o + 4], 11, 1272893353), a, u, l[o + 7], 16, 4139469664), c, a, l[o + 10], 23, 3200236656), d = v(d, c = v(c, a = v(a, u, d, c, l[o + 13], 4, 681279174), u, d, l[o + 0], 11, 3936430074), a, u, l[o + 3], 16, 3572445317), c, a, l[o + 6], 23, 76029189), d = v(d, c = v(c, a = v(a, u, d, c, l[o + 9], 4, 3654602809), u, d, l[o + 12], 11, 3873151461), a, u, l[o + 15], 16, 530742520), c, a, l[o + 2], 23, 3299628645), d = h(d, c = h(c, a = h(a, u, d, c, l[o + 0], 6, 4096336452), u, d, l[o + 7], 10, 1126891415), a, u, l[o + 14], 15, 2878612391), c, a, l[o + 5], 21, 4237533241), d = h(d, c = h(c, a = h(a, u, d, c, l[o + 12], 6, 1700485571), u, d, l[o + 3], 10, 2399980690), a, u, l[o + 10], 15, 4293915773), c, a, l[o + 1], 21, 2240044497), d = h(d, c = h(c, a = h(a, u, d, c, l[o + 8], 6, 1873313359), u, d, l[o + 15], 10, 4264355552), a, u, l[o + 6], 15, 2734768916), c, a, l[o + 13], 21, 1309151649), d = h(d, c = h(c, a = h(a, u, d, c, l[o + 4], 6, 4149444226), u, d, l[o + 11], 10, 3174756917), a, u, l[o + 2], 15, 718787259), c, a, l[o + 9], 21, 3951481745), a = f(a, n), u = f(u, i), d = f(d, s), c = f(c, r);
    return (A(a) + A(u) + A(d) + A(c)).toLowerCase()
}

function getHash(e, t) {
    t || (t = [4, 3, 5, 6, 1, 2, 8, 7, 2, 9, 3, 5, 7, 1, 4, 8, 8, 3, 4, 3, 1, 7, 3, 5, 9, 8, 1, 4, 3, 7, 2, 8]);
    for (var o = [], n = 0; n < e.length; n++) o.push(parseInt("0x0" + e.charAt(n)));
    var i = [];
    (e = (e = o).slice(0))[32] = e[31];
    var s = 0;
    for (n = 32; n-- > 0;) s += e[n];
    for (x = 0; x < 32; x++) i[x] = Math.abs(s - e[x + 1] * e[x] * t[x]);
    return i.join("")
}

function sendRequest(e, t) {
    "string" == typeof e && (e = {
        command: e
    }), chrome['runtime'].sendMessage(e, function(e) {
        t && t(e)
    })
}

function processAudio(e, t, o, n, i) {
    if (void 0 === i) {
        var s = t.play.match(/(?:\?|&)md5=([\da-f]{32})/i);
        if (s && s.length > 1) {
            s = s[1];
            try {
                return void processAudio(e, t, o, n, getHash(s = getMD5(s + "secret"), !1))
            } catch (e) {}
        }
    } else {
        audioRows[e][0].url = t.play + (i ? "&clientHash=" + i : ""), audioRows[e][0].artist = t.track.ensemble, audioRows[e][0].song = t.track.name, audioRows[e][0].duration = t.track.duration;
        var r = doc.getElementById("ok_audio_" + e + "_down") || null;
        if (r) {
            var a = getAudioName(e);
            r.setAttribute("download", "" + a), r.setAttribute("href", "" + audioRows[e][0].url), o && chrome['runtime'].sendMessage({
                command: "Download",
                url: audioRows[e][0].url,
                name: "" + a
            }, function(e) {})
        }
    }
}

function getAudioName(e) {
    return ("" == audioRows[e][0].artist ? "" == audioRows[e][0].song ? "no name" : "" + audioRows[e][0].song : "" == audioRows[e][0].song ? "" + audioRows[e][0].artist : audioRows[e][0].artist + " - " + audioRows[e][0].song) + ".mp3"
}

function downloadAudio(e) {
    return sendRequest({
        command: "get_size",
        id: e,
        info: audioRows[e][0],
        jsessionid: audio.jsessionid
    }, function(t) {
        console.log(t), processAudio(e, t, !0, !1)
    }), !1
}

function addDownloadLink(e, t, o) {
    var n = e.getAttribute("class");
    e.setAttribute("class", n + " __download");
    var i = e.getElementsByClassName("mus-tr_cnt")[0] || null;
    if (i) var s = e.getElementsByClassName("mus-tr_hld")[0] || null;
    var r = doc.createElement("span");
    r.setAttribute("class", "okmusic_download"), r.setAttribute("id", "ok_audio_" + o + "_down"), r.setAttribute("title", "Скачать"), s.insertBefore(r, i), audioRows[o] ? (r.setAttribute("href", "" + audioRows[o][0].url), r.setAttribute("download", "" + getAudioName(o)), r.setAttribute("style", "opacity: 1;  filter: alpha(opacity=100);"), r.addEventListener("click", function(e) {
        downloadAudio(o)
    }, !0)) : (audioRows["" + o] = new Array({
        id: "" + o,
        url: "",
        size: "0",
        artist: "",
        song: "",
        time: "0"
    }), r.setAttribute("href", ""), r.setAttribute("download", ""), r.setAttribute("style", "opacity: 1;  filter: alpha(opacity=100);"), r.addEventListener("click", function(e) {
        downloadAudio(o)
    }, !0))
}

function processMusicPage() {
    var e = doc.getElementsByClassName("m_c_s") || null;
    if (e)
        for (var t = 0; t < e.length; t++)
            if ("false" == e[t].getAttribute("aria-hidden")) {
                var o = "",
                    n = e[t].getElementsByClassName("m_c_artist_w")[0] || null;
                n && (o = n.innerText), "" == o && (n = e[t].getElementsByClassName("mus_h2_tx")[0] || null) && (o = n.innerText);
                var i = e[t].getElementsByClassName("mus-tr_i") || null;
                if (i) {
                    for (var s = 0, r = 0; r < i.length; r++)
                        if (!i[r].hasAttribute("ok_audio_save")) {
                            s++, i[r].setAttribute("ok_audio_save", !0);
                            var a = i[r].getAttribute("data-query");
                            if (a.length > 5) {
                                var u = a.match(/(trackid\":(\d+))/i);
                                u.length > 1 && addDownloadLink(i[r], o, u[2])
                            }
                        }
                    if (i.length == s) {
                        var d = doc.getElementById("ok_menu_save_but_check") || null;
                        d && d.removeAttribute("check");
                        var c = doc.getElementById("ok_menu_audio_size") || null;
                        c && c.setAttribute("style", "display:none")
                    }
                }
            }
}

function runTimer() {
    TimerAudioId && clearInterval(TimerAudioId), TimerAudioId = window.setInterval(runTimer, 1e4), processPage()
}

function processPage() {
    window.document.location.href.indexOf("music") > -1 && (audio.jsessionid ? processMusicPage() : sendRequest({
        command: "get_jsses"
    }, function(e) {
        e && e.data && e.data.sid && (audio.jsessionid = e.data.sid, processMusicPage())
    }))
}
var TimerAudioId, doc = window.document,
    audio = {
        error: "0",
        jsessionid: "",
        cache: {},
        clientHash: {}
    },
    audioRows = new Array,
    music_download = {
        file: 0,
        size: 0,
        mb: 0
    },
    run = function() {
        var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            t = document.body;
        e ? (new e(function(e) {
            e.forEach(function(e) {
                if ("childList" === e.type) {
                    for (var t = !1, o = 0; o < e.addedNodes.length; o++) $(e.addedNodes[o]).hasClass("mus-tr_i") && (t = !0);
                    t && processPage()
                }
            })
        }).observe(t, {
            childList: !0,
            subtree: !0
        }), processPage()) : runTimer()
    };

run();