/*-----------------------------------------------------------------------------------

    Template Name: Alexi

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]
    
    01. mobile-nav
    02. Header Search
    03. countTo
    04. progress
    05. accordion-item
    06. mySwiper
    07. swiper-case-study
    08. swiper-heroone
    09. swiper-reviews
    10. #desktop-menu
    11. scrollTop

-----------------------------------------------------------------------------------*/
/* 01. mobile-nav */ 
jQuery(document).ready(function($){
jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

          jQuery(this).toggleClass('active');

        }); 

        jQuery('#nav-icon4').click(function($){

            jQuery('#mobile-nav').toggleClass('open');

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });


        jQuery('.bar-menu').click(function($){

            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });
    });


/* 02. Header Search */
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

/* 03. countTo */ 
  $.fn.countTo = function(options) {
    options = options || {};

    return $(this).each(function() {
      
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals")
        },
        options
      );
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate === "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete === "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }

jQuery(function($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function(value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
  });

  /* start all the timers */
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});

// 04. progress
var bars = document.querySelectorAll('.meter > span');

setInterval(function(){
  bars.forEach(function(bar){
    var getWidth = parseFloat(bar.dataset.progress);
    
    for(var i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 500);
// progress end
/* 05. accordion-item */

$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }
    var $content = $(this).next();
    $content.slideToggle(800);
    $('.accordion-item .content').not($content).slideUp('fast');
});

// end
/* 06. mySwiper */ 
if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        10: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
/* 07. swiper-case-study */
    var swiper = new Swiper(".swiper-case-study", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        993: {
          slidesPerView: 2,
        },
      },
    });
/* 08. swiper-heroone */
    var swiper = new Swiper(".swiper-heroone", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    
    });
/* 09. swiper-reviews */
    var swiper = new Swiper(".swiper-reviews", {
      slidesPerView: 1,
      loop: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
      var swiper = new Swiper(".swiperimg", {
      effect: "cube",
      grabCursor: true,
      speed:1000,
      freeMode: true,
      autoplay: {
        delay: 3000,
      },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
}
/* 10. #desktop-menu */

$('#desktop-menu').click(function(){
        $(this).toggleClass('open');
        $('.desktop-menu').toggleClass('open');
    });

/* 11. scrollTop */

function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

$(function() {
  $(window).scroll(function() {
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});
 let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#4646b5 ${scrollValue}%, #fff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// end
