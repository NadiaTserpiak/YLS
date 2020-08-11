import $ from "jquery";
require('./slick/slick');

// window.dropdownMenu = function (){dropdownMenu() };
// function dropdownMenu(){
//   document.getElementById("dropdown").style.opacity = "1";

// }
// window.dropdownMenuHide = function (){dropdownMenuHide() };
// function dropdownMenuHide(){
//   document.getElementById("dropdown").style.opacity = "0";

// }
//text writer
$(document).ready(function () {

    $('.single-item').slick({
        prevArrow: $('.prev-slider-video'),
        nextArrow: $('.next-slider-video'),
    });
    $('.multiple-items').slick({
        prevArrow: $('.prev-slider-img'),
        nextArrow: $('.next-slider-img'),
    });
});


if ($('*').is('.welcome-txt')) {
    const textTime = 1100;
    const textNode = document.querySelector('.welcome-txt');
    function textWriter(node, ms) {
        const text = node.textContent;
        let index = 0;
        const textToShowArray = [
            'Welcome to'
        ];

        let textToShow = text;

        function reverse() {
            const step = ms / textToShow.length;
            const interval = setInterval(() => {
                textToShow = textToShow.slice(0, textToShow.length - 1);
                node.textContent = textToShow;
                if (textToShow.length === 0) {
                    clearTimeout(interval);
                    textToShow = textToShowArray[index];
                    index++;
                    forward();
                }
            }, step)
        }

        function forward() {
            const step = ms / textToShow.length;
            const length = textToShow.length;
            const copyText = textToShow;
            let currentIndex = 1;
            const interval = setInterval(() => {
                textToShow = copyText.slice(0, currentIndex);
                currentIndex++;

                node.textContent = textToShow;
            }, step)
        }
        reverse();
    }
    textWriter(textNode, textTime);
}

// -
window.openNav = function () { openNav() };
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "700px";
}
window.closeNav = function () { closeNav() };
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//video  slider 1
if ($('*').is('.single-item')) {
    document.addEventListener("DOMContentLoaded", setupControl, false);
    function setupControl() {
        var myVideo = document.getElementById("video-in-block");
        if (myVideo.canPlayType) {
            myVideo.removeAttribute("controls");
            myVideo.addEventListener("ended", endPlayback, false);
            myVideo.addEventListener("play", function () {
                document.getElementById("start").disabled = true;
                document.getElementById("pause").disabled = false;
            }, false);
            myVideo.addEventListener("pause", function () {
                document.getElementById("start").disabled = false;
                document.getElementById("pause").disabled = true;
            }, false);
            document.getElementById("start").addEventListener("click", startPlayback, false);
            document.getElementById("pause").addEventListener("click", pausePlayback, false);
        }
    }
    window.startvideo = function () { startvideo() };
    function startvideo() {
        document.getElementById("start").style.display = "none";
        document.getElementById("pause").style.display = "inline";
        myVideo.setAttribute("controls");
    }
    window.pausevideo = function () { pausevideo() };
    function pausevideo() {
        document.getElementById("start").style.display = "inline";
        document.getElementById("pause").style.display = "none";
    }
    function startPlayback() {
        document.getElementById("video-in-block").play();
    }
    function pausePlayback() {
        document.getElementById("video-in-block").pause();
    }
    function endPlayback() {
        document.getElementById("start").disabled = false;
        document.getElementById("pause").disabled = true;
        document.getElementById("pause").style.display = "none";
        document.getElementById("start").style.display = "inline";
    }
}

// SCROLL TO TOP

$('.todown').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
