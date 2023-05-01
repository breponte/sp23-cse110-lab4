let getTime = function() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

/* indefinitely calls getTime() every second */
setInterval(getTime, 1000);