import $ from "jquery";
require('./slick/slick');
// const Parallax = require('parallax-js');

//
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene, {
//   relativeInput: true
// });

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
                "value": "#b189dc"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 2,
                    "color": "#b189dc"
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
                "color": "#b189dc",
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
 
 
//
if ($('*').is('.about-yls')) {
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
      document.getElementById("footer-main").style.zIndex = "44";
      document.getElementById("phone-animation").style.position = "fixed";
     
      document.getElementById("phone-animation").style.bottom = "20px";
      document.getElementById("individ-block").style.paddingTop= "70px";
     
 }
 else {
  // document.getElementById("individ-block").style.marginTop = "134px";
  document.getElementById("phone-animation").style.position = "relative";
  document.getElementById("phone-animation").style.bottom = "0px";
  document.getElementById("phone-animation").style.marginTop = "-100px";
  document.getElementById("individ-block").style.paddingTop= "20px";

}
}
}
//pre
if ($('*').is('#main-container')) {

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  })
}
loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  });
}
//
window.btnOver = function () { btnOver() };
function btnOver() {
    document.getElementById("bg-hover").style.transform = "rotate(-4deg)";

}
window.btnOut = function () { btnOut() };
function btnOut() {
    document.getElementById("bg-hover").style.transform = "rotate(0deg)";
}
//
window.btnOver2 = function () { btnOver2() };
function btnOver2() {
    document.getElementById("bg-hover2").style.transform = "rotate(-4deg)";

}
window.btnOut2 = function () { btnOut2() };
function btnOut2() {
    document.getElementById("bg-hover2").style.transform = "rotate(0deg)";
}
//
window.btnOver3 = function () { btnOver3() };
function btnOver3() {
    document.getElementById("bg-hover3").style.transform = "rotate(-4deg)";

}
window.btnOut3 = function () { btnOut3() };
function btnOut3() {
    document.getElementById("bg-hover3").style.transform = "rotate(0deg)";
}
//
window.btnOver4 = function () { btnOver4() };
function btnOver4() {
    document.getElementById("bg-hover4").style.fontSize = "17px";
    var mql = window.matchMedia('all and (max-width: 700px)');
    if (mql.matches) {
        document.getElementById("bg-hover4").style.fontSize = "13px";
    }
}
window.btnOut4 = function () { btnOut4() };
function btnOut4() {
    document.getElementById("bg-hover4").style.fontSize = "16px";
    var mql = window.matchMedia('all and (max-width: 700px)');
    if (mql.matches) {
        document.getElementById("bg-hover4").style.fontSize = "12px";
    }
}
//
window.btnOver5 = function () { btnOver5() };
function btnOver5() {
    document.getElementById("bg-hover5").style.transform = "rotate(-4deg)";

}
window.btnOut5 = function () { btnOut5() };
function btnOut5() {
    document.getElementById("bg-hover5").style.transform = "rotate(0deg)";
}
//
window.btnOver6 = function () { btnOver6() };
function btnOver6() {
    document.getElementById("bg-hover6").style.fontSize = "17px";
    var mql = window.matchMedia('all and (max-width: 700px)');
    if (mql.matches) {
        document.getElementById("bg-hover6").style.fontSize = "13px";
    }

}
window.btnOut6 = function () { btnOut6() };
function btnOut6() {
    document.getElementById("bg-hover6").style.fontSize = "16px";
    var mql = window.matchMedia('all and (max-width: 700px)');
    if (mql.matches) {
        document.getElementById("bg-hover6").style.fontSize = "12px";
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
      //popup
      var elementts = $('.modal-overlay-page, .modal-page');

      $('.modal-btn-page').click(function () {
        elementts.addClass('active-page');
      });
    
      $('.close-modal-page').click(function () {
        elementts.removeClass('active-page');
      });
      //popupphone
      var element = $('.modal-overlay-call, .modal-call');

      $('.modal-btn-call').click(function () {
        element.addClass('active-call');
      });
    
      $('.close-modal-call').click(function () {
        element.removeClass('active-call');
      });
     //
     
  $(".call-phone2").click(function(){
    $(".search-items").css("opacity", "0");
  });
  $(".close-modal-call").click(function(){
    $(".search-items").css("opacity", "1");
  });
  //
  $(".call-phone2").click(function(){
    $(".search-mobile-cours").css("opacity", "0");
  });
  $(".close-modal-call").click(function(){
    $(".search-mobile-cours").css("opacity", "1");
  });
    });
// });
//
if ($('*').is('.about-yls')) {
function PopTime() {
  document.getElementById("popupTime").style.display = "block";   
}

setTimeout(PopTime, 9000);}
//adaptive slider
// var mql = window.matchMedia('(min-width: 820px) and (max-width: 1380px)');
// if (mql.matches) {
//     $('.autoplay').slick({
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 prevArrow: $('.prev-slider-program'),
//                 nextArrow: $('.next-slider-program'),
//               });
// }
// var mql = window.matchMedia('all and (max-width: 820px)');
// if (mql.matches) {
//     $('.autoplay').slick({
//                 slidesToScroll: 1,
//                 slidesToShow: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 prevArrow: $('.prev-slider-program'),
//                 nextArrow: $('.next-slider-program'),
//               });
// }
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
//
window.closepopTime = function () { closepopTime() };
function closepopTime() {
    document.getElementById("popupTime").style.display = "none";   
}
//
window.BigVideo = function () { BigVideo() };
function BigVideo() {
    document.getElementById("big_video").style.zIndex = "3";
    document.getElementById("big_video").style.opacity = "1";
    document.getElementById("img-bg").style.opacity = "0";

}
// -
window.BigGallery = function () { BigGallery() };
function BigGallery() {
    document.getElementById("img_modal").style.display = "block";
    document.getElementById("social-network").style.opacity = "0";
    document.getElementById("text-follow").style.opacity = "0";
    document.getElementById("phone-animation").style.opacity = "0";

}
//
window.closeGallery = function () { closeGallery() };
function closeGallery() {
    document.getElementById("img_modal").style.display = "none";
    document.getElementById("social-network").style.opacity = "1";
    document.getElementById("text-follow").style.opacity = "1";
    document.getElementById("phone-animation").style.opacity = "1";

}
//
window.BigGallery2 = function () { BigGallery2() };
function BigGallery2() {
    document.getElementById("img_modal2").style.display = "block";
    document.getElementById("social-network").style.opacity = "0";
    document.getElementById("text-follow").style.opacity = "0";
    document.getElementById("phone-animation").style.opacity = "0";

}
//
window.closeGallery2 = function () { closeGallery2() };
function closeGallery2() {
    document.getElementById("img_modal2").style.display = "none";
    document.getElementById("social-network").style.opacity = "1";
    document.getElementById("text-follow").style.opacity = "1";
    document.getElementById("phone-animation").style.opacity = "1";
    

}
//
window.BigGallery3 = function () { BigGallery3() };
function BigGallery3() {
    document.getElementById("img_modal3").style.display = "block";
    document.getElementById("social-network").style.opacity = "0";
    document.getElementById("text-follow").style.opacity = "0";
    document.getElementById("phone-animation").style.opacity = "0";

}
//
window.closeGallery3 = function () { closeGallery3() };
function closeGallery3() {
    document.getElementById("img_modal3").style.display = "none";
    document.getElementById("social-network").style.opacity = "1";
    document.getElementById("text-follow").style.opacity = "1";
    document.getElementById("phone-animation").style.opacity = "1";

}
//
window.openNav = function () { openNav() };
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.position = "fixed";
    document.getElementById("main-container").style.opacity = "0";
}
window.closeNav = function () { closeNav() };
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.position = "none";
    document.getElementById("main-container").style.opacity = "1";
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
        // myVideo.setAttribute("controls");
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

// CALC
$('.stepwrap1 .next-step').click(function () {
    $('.stepnum').addClass('stephide');
    $('.stepwrap2').removeClass('stephide');

    $('.stepshead__box').removeClass('active');
    $('.stepshead__box.box1').addClass('check');
    $('.stepshead__box.box2').addClass('active');
});
// -2
$('.stepwrap2 .prev-step').click(function () {
    $('.stepnum').addClass('stephide');
    $('.stepwrap1').removeClass('stephide');

    $('.stepshead__box').removeClass('active');
    $('.stepshead__box').removeClass('check');
    $('.stepshead__box.box1').addClass('active');
});
$('.stepwrap2 .next-step').click(function () {
    $('.stepnum').addClass('stephide');
    $('.stepwrap3').removeClass('stephide');

    $('.stepshead__box').removeClass('active');
    $('.stepshead__box.box1, .stepshead__box.box2').addClass('check');
    $('.stepshead__box.box3').addClass('active');
});
// -3
$('.stepwrap3 .prev-step').click(function () {
    $('.stepnum').addClass('stephide');
    $('.stepwrap2').removeClass('stephide');

    $('.stepshead__box').removeClass('active').removeClass('check');
    $('.stepshead__box.box1').addClass('check');
    $('.stepshead__box.box2').addClass('active');
});
$('.stepwrap3 .next-step').click(function () {
    $('.stepnum').addClass('stephide');
    $('.stepwrap4').removeClass('stephide');

    $('.stepshead__box').removeClass('active');
    $('.stepshead__box.box1, .stepshead__box.box2, .stepshead__box.box3').addClass('check');
    $('.stepshead__box.box4').addClass('active');
});
// 4
$('.stepwrap4 .prev-step').click(function () {
    $('.stepnum').addClass('stephide');
    $('.stepwrap3').removeClass('stephide');

    $('.stepshead__box').removeClass('active').removeClass('check');
    $('.stepshead__box.box1, .stepshead__box.box2').addClass('check');
    $('.stepshead__box.box3').addClass('active');
});
$(document).ready(function () {
    if ($(window).width() < 768) {
        $('.sidebar-filter__cont .title').click(function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('rotatebefore');
        });
    }

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.sidebar-filter__cont .title').click(function () {
                $(this).next().slideToggle();
                $(this).parent().toggleClass('rotatebefore');
            });
        }
    });


});