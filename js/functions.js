"use strict"

    //class

class txtRotate {

    constructor(el, toRotate, period){
        this.toRotate   = toRotate;
        this.el         = el;
        this.loopNum    = 0;
        this.period     = parseInt(period, 10) || 2000;
        this.txt        = "";
        this.isDeleting = false;
        this.tick();

    }
    get thistoRotate() {
        return this.toRotate;
    }
    get thisEl() {
        return this.el;
    }
    get thisloopNum() {
        return this.loopNum;
    }
    get thisPeriod() {
        return this.period;
    }
    get thisTxt() {
        return this.txt;
    }
    get thisIsDeleting() {
        return this.isDeleting;
    }

    tick() {

    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];


    //conditionals
    if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //pintame moreno
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    //conditionals
    if(this.isDeleting) { delta /= 2;}

    if(!this.isDeleting && this.txt === fullTxt) {

        delta = this.period;

        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    //timer
    setTimeout(function() {

        that.tick();
    }, delta);
}
};

function changeWords() {
    let arrWords = document.getElementsByClassName('txt-rotate');

    //loopthrough the arr
    for (let i = 0; i < arrWords.length; i++){

        let changingWords = arrWords[i].getAttribute('data-rotate');
        let period = arrWords[i].getAttribute('data-period');

        if (changingWords) {

            new txtRotate(arrWords[i], JSON.parse(changingWords), period);
        }
    }
}
changeWords();

//validation form

//getters
//contact button
let button1 = document.getElementById('sendButton');

//links to open contact
let contactLink = document.querySelectorAll('myLinks');

//contact
let contactForm = document.getElementById('myForm');

//addevent
button1.addEventListener('click', checkForm);

function checkForm (){

    //clean
    cleanStatus();

    //get everything you fool
    let name    = document.getElementById('name').value;  

    //let's check your body
    (name == "") ? checkName(name) : name;
    console.log(name);


}

//recursive functions

//clean fields
const cleanStatus = () => {
    
    document.getElementById('status').innerHTML = "";
}

//check name
const checkName = (word) => {

    let str = word;

    let text = "";

    while (str == "") {

        text = "Place a name you fool!";

        document.getElementById('status').innerHTML = text;

        return text;
    }
    (str !== "") ? text = str : document.getElementById('status').innerHTML = "You are in big trouble";

    return text;
}

//show year

//get me dear mine
let today = document.getElementById('thisYear');

//const year
const showYear = () => new Date().getUTCFullYear();

//print
today.innerHTML = showYear();

//burger menu

 document.querySelector('.menu-btn').addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show');
 });

//modal cookies jquery
//when document ready do ...
$(document).ready(() => {
    $('#cookiesModal').modal('show');
});

//scroll view
ScrollReveal().reveal('.aboutMe', {delay: 300});
ScrollReveal().reveal('.services', {delay: 300});
ScrollReveal().reveal('.works', {delay: 300});
ScrollReveal().reveal('.contactMe', {delay: 300});
ScrollReveal().reveal('.myFooter', {delay: 300});



