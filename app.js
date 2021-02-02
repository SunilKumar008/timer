var s = 60;
var mint = document.getElementById("mnt").value;
var h = document.getElementById("hr").value;
var miliscnd = 0;
var disphour = document.getElementById("hor");
var dismnt = document.getElementById("mnt");
var dissec = document.getElementById("sec");
var mili = document.getElementById("milisec");


function timer() {

    miliscnd++;
    mili.innerHTML = miliscnd;
    if (miliscnd === 100) {
        miliscnd = 0;
        s--;
        dissec.innerHTML = s;
    }
    else if (s == 0) {
        s = 60;
        s--;
        mint--;
        dismnt.innerHTML = mint;
    }
    else if (mint == 0) {
        mint--;
        h--;
        disphour.innerHTML = h;
    }
}

function strt() {
    tim = setInterval(timer, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

function stp() {
    clearInterval(tim);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}
function clr() {
    s = "00";
    mint = "00";
    h = "00";
    miliscnd = "00";
    disphour.innerHTML = h;
    dismnt.innerHTML = mint;
    dissec.innerHTML = s;
    mili.innerHTML = miliscnd;
    clearInterval(tim);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = false;
}