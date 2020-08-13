import $ from "jquery";
require('./slick/slick');
//
/* ---- particles.js config ---- */
if ($('*').is('.block-values')) {
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 270,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#7838BC"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#7838BC"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#7838BC",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}
  
//   var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);

//
if ($('*').is('.about-yls')) {
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
      document.getElementById("phone-animation").style.position = "fixed";
      document.getElementById("phone-animation").style.marginLeft = "70.6%";
      document.getElementById("phone-animation").style.marginTop = "-500px";
      document.getElementById("individ-block").style.marginTop = "134px";
      var mql = window.matchMedia('all and (max-height: 600px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginTop = "-600px";
      }
      var mql = window.matchMedia('all and (max-height: 500px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginTop = "-700px";
      }
   
      var mql = window.matchMedia('all and (max-width: 1323px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginLeft = "67%";
      }
      var mql = window.matchMedia('all and (max-width: 1166px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginLeft = "63%";
      }
      var mql = window.matchMedia('all and (max-width: 889px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginLeft = "53%";
      }
      var mql = window.matchMedia('all and (max-width: 700px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginLeft = "40%";
      }
         var mql = window.matchMedia('all and (max-width: 510px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginTop = "-250px";
      }
      var mql = window.matchMedia('all and (max-width: 543px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginLeft = "30%";
      }
      var mql = window.matchMedia('all and (max-width: 484px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginLeft = "10%";
      }
        var mql = window.matchMedia('all and (max-width: 400px)');
      if (mql.matches) {
        document.getElementById("phone-animation").style.marginLeft = "0%";
      }
   
 }
 else {
  document.getElementById("individ-block").style.marginTop = "70px";
  document.getElementById("phone-animation").style.position = "relative";
  document.getElementById("phone-animation").style.marginTop = "-85px";
}
}
}
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
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev-slider-program'),
        nextArrow: $('.next-slider-program'),
      });
    
});

//adaptive slider
var mql = window.matchMedia('(min-width: 820px) and (max-width: 1380px)');
if (mql.matches) {
    $('.autoplay').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: $('.prev-slider-program'),
                nextArrow: $('.next-slider-program'),
              });
}
var mql = window.matchMedia('all and (max-width: 820px)');
if (mql.matches) {
    $('.autoplay').slick({
                slidesToScroll: 1,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                prevArrow: $('.prev-slider-program'),
                nextArrow: $('.next-slider-program'),
              });
}
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
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.position = "fixed";
    document.getElementById("phone-animation").style.opacity = "0";
}
window.closeNav = function () { closeNav() };
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.position = "none";
    document.getElementById("phone-animation").style.opacity = "1";
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
//animation

// SLIDER COURSES ABOUT
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});
$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true
});
