function watcher() {
    function obs() {
        var observables = document.getElementsByClassName('h1 text-info font-thin h1')[1];
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                var callQ = parseInt(mutation.target.nodeValue);
                if (callQ > 1) {
                    console.log("There are currently " + mutation.target.nodeValue + " calls in the queue.");
                    ajax("There are currently " + mutation.target.nodeValue + " calls in the queue.");
                }
            });
        });
        var config = {
            characterData: true,
            subtree: true
        };
        observer.observe(observables, config);
    }

    function ajax(data) {
        var URL = "https://hooks.slack.com/services/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"; //404helpdesknotfound
        //var URL = "https://hooks.slack.com/services/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"; //slackbot
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", URL, true);
        xhttp.send('{"text":"' + data + '"}');
    }
    obs();
}
watcher();