(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-beaglebone/",
    "verprefix": "",
    "workerjs": "/pxt-beaglebone/worker.js",
    "monacoworkerjs": "/pxt-beaglebone/monacoworker.js",
    "pxtVersion": "5.4.7",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt-beaglebone/",
    "commitCdnUrl": "/pxt-beaglebone/",
    "blobCdnUrl": "/pxt-beaglebone/",
    "cdnUrl": "/pxt-beaglebone/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "beaglebone",
    "simUrl": "/pxt-beaglebone/simulator.html",
    "partsUrl": "/pxt-beaglebone/siminstructions.html",
    "runUrl": "/pxt-beaglebone/run.html",
    "docsUrl": "/pxt-beaglebone/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-beaglebone/highlight.js/highlight.pack.js",
        "/pxt-beaglebone/bluebird.min.js",
        "/pxt-beaglebone/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-beaglebone/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-beaglebone/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-beaglebone/target.js");
    scripts.push("/pxt-beaglebone/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
