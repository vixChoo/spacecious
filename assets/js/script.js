
var transparent = true;
var big_image;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
  backgroundOrange = false,
  toggle_initialized = false;

var $datepicker = $('.datepicker');
var $collapse = $('.navbar .collapse');
var $html = $('html');

(function() {
  var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function


    if ($('.tab-content .table-responsive').length != 0) {

      $('.table-responsive').each(function() {
        var ps2 = new PerfectScrollbar($(this)[0]);
      });
    }



    $html.addClass('perfect-scrollbar-on');
  } else {
    $html.addClass('perfect-scrollbar-off');
  }
})();

$(document).ready(function() {
  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

  // Activate Popovers and set color for popovers
  $('[data-toggle="popover"]').each(function() {
    color_class = $(this).data('color');
    $(this).popover({
      template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  });

  var squares1 = document.getElementById("square1");
  var squares2 = document.getElementById("square2");
  var squares3 = document.getElementById("square3");
  var squares4 = document.getElementById("square4");
  var squares5 = document.getElementById("square5");
  var squares6 = document.getElementById("square6");
  var squares9 = document.getElementById("square7");
  var squares10 = document.getElementById("square8");

  if ($('.square').length != 0) {

    $(document).mousemove(function(e) {
      posX = event.clientX - window.innerWidth / 2;
      posY = event.clientY - window.innerWidth / 6;

      squares1.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * (-0.05) + "deg)";
      squares2.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * (-0.05) + "deg)";
      squares3.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * (-0.05) + "deg)";
      squares4.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * (-0.05) + "deg)";
      squares5.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * (-0.05) + "deg)";
      squares6.style.transform = "perspective(500px) rotateY(" + posX * 0.05 + "deg) rotateX(" + posY * (-0.05) + "deg)";
      squares9.style.transform = "perspective(500px) rotateY(" + posX * 0.02 + "deg) rotateX(" + posY * (-0.02) + "deg)";
      squares10.style.transform = "perspective(500px) rotateY(" + posX * 0.02 + "deg) rotateX(" + posY * (-0.02) + "deg)";

    });
  }

  // Activate the image for the navbar-collapse
  blackKit.initNavbarImage();

  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500;

  // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

  if ($('.navbar[color-on-scroll]').length != 0) {
    blackKit.checkScrollForTransparentNavbar();
    $(window).on('scroll', blackKit.checkScrollForTransparentNavbar)
  }

  $('.form-control').on("focus", function() {
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function() {
    $(this).parent(".input-group").removeClass("input-group-focus");
  });

  // Activate bootstrapSwitch
  $('.bootstrap-switch').each(function() {
    $this = $(this);
    data_on_label = $this.data('on-label') || '';
    data_off_label = $this.data('off-label') || '';

    $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label
    });
  });

  // Activate Carousel
  $('.carousel').carousel({
    interval: false
  });
});

// Methods

function hideNavbarCollapse($this) {
  $this.addClass('collapsing-out');
}

function hiddenNavbarCollapse($this) {
  $this.removeClass('collapsing-out');
}


// Events

if ($collapse.length) {
  $collapse.on({
    'hide.bs.collapse': function() {
      hideNavbarCollapse($collapse);
    }
  })

  $collapse.on({
    'hidden.bs.collapse': function() {
      hiddenNavbarCollapse($collapse);
    }
  })
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

$(document).on('click', '.navbar-toggler', function() {
  $toggle = $(this);

  if (blackKit.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    blackKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 550);
  } else {
    setTimeout(function() {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function() {
      $('html').removeClass('nav-open');
      blackKit.misc.navbar_menu_visible = 0;
      setTimeout(function() {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });

    $('html').addClass('nav-open');
    blackKit.misc.navbar_menu_visible = 1;
  }
});

blackKit = {
  misc: {
    navbar_menu_visible: 0
  },

  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
      }
    }
  }, 17),

  initNavbarImage: function() {
    var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
    var background_image = $navbar.data('nav-image');

    if ($(window).width() < 991 || $('body').hasClass('burger-menu')) {
      if (background_image != undefined) {
        $navbar.css('background', "url('" + background_image + "')")
          .removeAttr('data-nav-image')
          .css('background-size', "cover")
          .addClass('has-image');
      }
    } else if (background_image != undefined) {
      $navbar.css('background', "")
        .attr('data-nav-image', '' + background_image + '')
        .css('background-size', "")
        .removeClass('has-image');
    }
  },

  

  initDatePicker: function() {
    if ($datepicker.length != 0) {
      $datepicker.datetimepicker({
        icons: {
          time: "fas fa-clock",
          date: "fas fa-calendar",
          up: "fa fa-chevron-up",
          down: "fa fa-chevron-down",
          previous: 'fas fa-chevron-left',
          next: 'fas fa-chevron-right',
          today: 'fa fa-screenshot',
          clear: 'fa fa-trash',
          close: 'fa fa-remove'
        }
      });
    }
  },
  initSliders: function() {
    // Sliders for demo purpose in refine cards section
    var slider = document.getElementById('sliderRegular');
    if ($('#sliderRegular').length != 0) {

      noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
      });
    }

    var slider2 = document.getElementById('sliderDouble');

    if ($('#sliderDouble').length != 0) {

      noUiSlider.create(slider2, {
        start: [20, 60],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });
    }
  }
}



// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};


// hidden 

function hideForm(hideForm, hideCheck) {
  let hiddenForm = document.getElementById(hideForm);
  let hiddenCheck = document.getElementById(hideCheck);

  if (hiddenCheck.checked) {
    hiddenForm.style.display = "block"
    hiddenForm.classList.remove("d-none")
    hiddenForm.classList.add("d-block")
  }
  else {
    hiddenForm.style.display = "none"
    hiddenForm.classList.add("d-none")
    hiddenForm.classList.remove("d-block")
  }
  
}
// Diasbled

function disableForm(disBtn, disDiv) {
  let hiddenForm = document.getElementById(disDiv);
  let hiddenCheck = document.getElementById(disBtn);

  if (hiddenCheck.checked) {
    hiddenForm.classList.remove("disabled")
  }
  else {
    hiddenForm.classList.add("disabled")
  }
}
   
  

// hidden

function hideDiv(hideDiv) {
  
  let hiddenDiv = document.getElementById(hideDiv);
  if (hiddenDiv.className.includes("d-none")) {
    hiddenDiv.style.display = "block"
    hiddenDiv.classList.remove("d-none")
    hiddenDiv.classList.add("d-block")
  }
 
    
  else{
    hiddenDiv.classList.add("d-none")
    hiddenDiv.classList.remove("d-block")
    hiddenDiv.style.display = "none"
  
  }

}

// Background scroll
(function ($) {
  $.fn.bgscroll = function (options) {
    var x = $.extend({ bgpositionx: 50, direction: "bottom", debug: !1, min: 0, max: 100 }, options);
    var a = $(document).height() - $(window).height(), b = a - (this.offset().top + this.height());
    this.offset().top < a && (b = 0);
    var c = (this.offset().top + this.height());
    if ($(window).scrollTop() > b && $(window).scrollTop() < c) {
      var d = ($(window).scrollTop() - b) / (c - b) * 100;
      "top" == x.direction && (d = 100 - d), d > x.max && (d = x.max), d < x.min && (d = x.min);
      if (x.debug) console.log('Element background position: ' + d + ' %');
    }
    return this.css({
      backgroundPosition: x.bgpositionx + '% ' + d + '%'
    });
  };
}(jQuery));


(function ($) {
  // window scroll function

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  // scroll top click function
  $('.scrollup').on('click', function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });


})(jQuery);




$('.owl-carousel-1').owlCarousel({
  loop: false,
  rewind: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },

    1000: {
      items: 3
    }
  }
})



$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})

