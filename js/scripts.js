/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */



$('.bbutton1').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container1').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container1').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});


$('.bbutton2').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container2').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container2').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('.bbutton3').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container3').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container3').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('.bbutton4').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container4').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container4').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('.bbutton5').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container5').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container5').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$('.bbutton6').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container6').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container6').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 200;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  