// home change
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header.main-header").addClass("changeHeight");
            $("header.nav-fixed").addClass("changeColor");
            $("header .navbar .navbar-brand").addClass("fontColor");
            $(".nav-fixed .navbar-expand-lg .navbar-nav .nav-link").addClass("navColor");
            $(".nav-fixed .navbar-expand-lg .navbar-nav li.nav-item.active").addClass("navActiveColor");
            $(".mode-container i").addClass("iconColor");
            $(".header.active").addClass("changeColor");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("header.main-header").removeClass("changeHeight");
            $("header.nav-fixed").removeClass("changeColor");
            $("header .navbar .navbar-brand").removeClass("fontColor");
            $(".nav-fixed .navbar-expand-lg .navbar-nav .nav-link").removeClass("navColor");
            $(".nav-fixed .navbar-expand-lg .navbar-nav li.nav-item.active").removeClass("navActiveColor");
            $(".mode-container i").removeClass("iconColor");
            $(".header.active").removeClass("changeColor");
        }
    })
});

// slick
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    loop: true,
    fade: true,
    cssEase: 'ease-in-out',
    prevArrow: '<button class="slick-preslide slick-bg" aria-label="Previous" type="button"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button class="slick-nextslide slick-bg" aria-label="Next" type="button"><i class="fa-solid fa-arrow-right"></i></button>'
});

// demo bar right
$('.toggle-right-sidebar span').on('click', function() {

    if ($("#right-sidebar").hasClass("hide-right-bar-notifications")) {
 
      $(".btn-bottom-right-sidebar-close").fadeIn("fast"); //show the button close for sidebar notifications
 
      //insert class to left sidebar
      if (!$("#sidebar").hasClass('hide-left-bar')) {
 
        $("#sidebar").addClass("hide-left-bar");
        $("#main-content").addClass("merge-left");
 
        if ($("html").outerWidth() <= 750) {
          if ($('#sidebar').hasClass('show-left-bar-mobile')) {
            $('#sidebar').removeClass("show-left-bar-mobile");
          }
        }
 
      } else {
        if ($("html").outerWidth() <= 750) {
          if ($('#sidebar').hasClass('show-left-bar-mobile')) {
            $('#sidebar').removeClass("show-left-bar-mobile");
          }
        }
      }
 
      $("#right-sidebar").removeClass("hide-right-bar-notifications");
 
      $("#right-sidebar").addClass(" animated fadeInRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass(" animated fadeInRight");
      });
 
      $(this).removeClass("fa-angle-double-left");
      $(this).addClass("fa-angle-double-right");
 
    } else {
 
      $(".btn-bottom-right-sidebar-close").fadeOut("fast"); //hide the button close for sidebar notifications
 
      //remove class to left sidebar
      if ($("#sidebar").hasClass('hide-left-bar')) {
        $("#sidebar").removeClass("hide-left-bar");
        $("#main-content").removeClass("merge-left");
      }
 
      $("#right-sidebar").addClass("hide-right-bar-notifications");
 
      $("#right-sidebar").addClass(" animated fadeOutRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass(" animated fadeOutRight");
      });
 
 
      $(this).removeClass("fa-angle-double-right");
      $(this).addClass("fa-angle-double-left");
    }
 
});

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
  
//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {        document.documentElement.setAttribute('data-theme', 'light');
//           localStorage.setItem('theme', 'light');
//     }    
// }

// color nav repsonsive
$(function() {
  $('#btnMenu').click(function() {
    if (document.getElementById("iconMenu").className == "navbar-toggler-icon") {
      $("header").addClass("active");
      document.getElementById("iconMenu").className = "fa-solid fa-xmark fa-2x";
    } else {
      $("header").removeClass("active");
      document.getElementById("iconMenu").className = "navbar-toggler-icon";
    }
  });
});



