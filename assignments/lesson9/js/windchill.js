function chillFormula(i) {
    s = document.getElementById(`day${i + 1}wind`).innerHTML;
    t = document.getElementById(`day${i + 1}high`).innerHTML;

    chill = 35.74 + 0.6215 * t - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16));

    return (chill.toFixed(2));
}


function setWindChill() {

    for (i = 0; i < 5; i++) {   
        if (document.getElementById(`day${i + 1}wind`).innerHTML >= 3 &&
                document.getElementById(`day${i + 1}high`).innerHTML <= 50) {

            document.getElementById(`day${i + 1}chill`).innerHTML = chillFormula(i);
        }
        else {
            document.getElementById(`day${i + 1}chill`).innerHTML = "N/A";
        }
    }
}


function start() {
    setWindChill();
}

window.onload=start();
