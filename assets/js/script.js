var acc = document.getElementsByClassName("intro__item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
    }
}


var acc = document.getElementsByClassName("intro__title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
    }
}


var acc = document.getElementsByClassName("accordion__item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
    }
}


var modal = document.getElementsByClassName("rulls__list-a");
var i;

for (i = 0; i < modal.length; i++) {
    modal[i].onclick = function() {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
    }
}

var win = document.getElementsByClassName("modal");
var i;

for (i = 0; i < win.length; i++) {
    win[i].onclick = function() {
        this.classList.toggle("show");
    }
}