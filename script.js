let rec;

if (!("webkitSpeechRecognition" in window)) {
    alert("Sorry, you can't use the API");
}

else {
    rec = new webkitSpeechRecognition();
    rec.lang = "en_US"; // Change if you speak other language
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result",start);
}

function start(event) {
    for (let i = event.resultIndex; i < event.results.length; i++){
        document.getElementById('text').innerHTML = event.results[i][0].transcript;
    }
}

rec.start();