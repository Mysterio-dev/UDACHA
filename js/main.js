"use strict";

(function () {
  'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

var swiperMain = new Swiper(".swiper-main", {
  lazy: true,
  effect: "slide",
  speed: 900,
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1"
  }
});
var swiperEvents = new Swiper(".swiper-events", {
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3"
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 20
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 80
    }
  }
});
var swiperBrand = new Swiper(".swiper-brand", {
  slidesPerView: 4,
  spaceBetween: 45,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2"
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 20
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 45
    }
  }
});
var swiperCard = new Swiper(".swiper-card", {
  slidesPerView: 4,
  spaceBetween: 45,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2"
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 30
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
$(function () {
  if (typeof map != 'undefined' && map != null) {
    setTimeout(function () {
      var smallmap = L.map("map", {
        zoomControl: false
      }).setView([55.673423, 37.631856], 15);
      var myIcon = L.icon({
        iconUrl: "img/svg/geo-alt-fill.svg",
        iconSize: [50, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
      });
      L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
        maxZoom: 20
      }).addTo(smallmap);
      L.marker([55.673423, 37.631856], {
        icon: myIcon
      }).addTo(smallmap);
      L.control.zoom({
        position: "topright"
      }).addTo(smallmap);
      var latLon = L.latLng(55.673423, 37.631856);
      var bounds = latLon.toBounds(100); // 100 = metres

      smallmap.panTo(latLon).fitBounds(bounds);
    }, 500);
  }
});
$(function () {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  });
  wow.init();
});

(function () {
  'use strict';

  var breakpoint = window.matchMedia('(min-width:48.000em)');
  var mySwiper;

  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  var enableSwiper = function enableSwiper() {
    mySwiper = new Swiper('.swiper-news', {
      slidesPerView: 'auto',
      spaceBetween: 45,
      a11y: true,
      keyboardControl: true,
      grabCursor: true
    });
  };

  breakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
})();
//# sourceMappingURL=main.js.map
