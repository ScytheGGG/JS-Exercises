var countdownDate = new Date("Jan 1, 2025 00:00:01").getTime();

var x = setInterval(function() {
        var now = new Date().getTime();

        var distance = countdownDate - now;

        // time calculations for days, hours, minutes, seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("cdc").innerHTML = days + " Days - " + hours + " Hours - " + minutes + " Minutes - " + seconds + " Seconds ";

        if (distance < 0) {
                clearInterval(x);
                document.getElementById("cdc").innerHTML = "Expired";
        }
}, 1000);