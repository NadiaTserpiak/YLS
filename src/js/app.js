
import $ from "jquery";

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

});
const cursorTime = 500;
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
window.openNav = function () { openNav() };
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.height = "700px";
}
window.closeNav = function () { closeNav() };
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


document.addEventListener("DOMContentLoaded", setupControl, false);
 function setupControl() {  
  var myVideo = document.getElementById("myVideo");
   if (myVideo.canPlayType) {  
    myVideo.removeAttribute("controls"); 

    myVideo.addEventListener("timeupdate", reportProgress, false);
    myVideo.addEventListener("ended", endPlayback, false);
 
    myVideo.addEventListener("play", function () {
      document.getElementById("start").disabled = true;
      document.getElementById("pause").disabled = false;
      document.getElementById("stop").disabled = false;

      document.getElementById("plus").disabled = false; 
      document.getElementById("minus").disabled = false;
      document.getElementById("mute").disabled = false;
    }, false);
     myVideo.addEventListener("pause", function () {
      document.getElementById("start").disabled = false; 
      document.getElementById("pause").disabled = true;
      document.getElementById("plus").disabled = true; 
      document.getElementById("minus").disabled = true;
      document.getElementById("mute").disabled = true;
 
    }, false);
 
    document.getElementById("start").addEventListener("click", startPlayback, false);
    document.getElementById("stop").addEventListener("click", stopPlayback, false);
    document.getElementById("pause").addEventListener("click", pausePlayback, false);
  }
}
window.startvideo = function (){startvideo() };
function startvideo() {
  document.getElementById("start").style.display="none";
  document.getElementById("pause").style.display="inline";
}
window.pausevideo = function (){pausevideo() };
function pausevideo() {
  document.getElementById("start").style.display="inline";
  document.getElementById("pause").style.display="none";
}
function startPlayback() {
  document.getElementById("myVideo").play();
}  
function pausePlayback() { 
  document.getElementById("myVideo").pause(); 
 
}
 function stopPlayback() {
  var myVideo = document.getElementById("myVideo");
  myVideo.pause(); myVideo.currentTime = 0; endPlayback();
 
}
 
function endPlayback() {  
  document.getElementById("start").disabled = false; 
  document.getElementById("pause").disabled = true;
  document.getElementById("stop").disabled = true;
 
} // update the progress bar 
function reportProgress() {
  var barwidth = 500; var sliderwidth = 30;
 
  var time = Math.round(this.currentTime);  
  var duration = parseInt(this.duration);
}