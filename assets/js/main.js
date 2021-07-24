$(document).ready(function () {

  categorySlide.init()
  menuMobile.init()
  slideDownMenu.init()
  backTop.init()
  const closeSearchBtn = $(".js-search-btn");
  const headerSeach = $(".js-header-search")

  closeSearchBtn.click(function() {
    $(this).toggleClass("btn-close")
    if($(this).hasClass("btn-close")) {
      headerSeach.css({"height": 300})
    }else {
      headerSeach.css({"height": 0})
    }
  })
});

const mainModal = $(".js-main-modal")
const barsBtn = $(".js-bars-btn")
const closeModelBtn = $(".js-close-modal")

barsBtn.click(function() {  
  mainModal.addClass("active")
  mainModal.css({"transform": "translateY(0)"})
})

closeModelBtn.click(function() {
  mainModal.removeClass("active")
  mainModal.css({"transform": ""})
})


const categorySlide = {
  init: function () {
    this.categorySlide();
  },
  categorySlide: function () {
    $(".category__slide-wrap").owlCarousel({
      items: 4,
      dots: false,
      loop: false,
      nav: false,
      autoplay: true,
      margin: 20,
      slideTransition: 'linear',
      autoplayTimeout: 5000,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  },
};


const tabs = $(".category__list li")
const panes = $(".pane")
tabs.click(function(event) {
  tabs.removeClass("active")
  $(this).addClass("active")
  panes.hide()
  var pane = $(this).attr("data-pane")
  $(pane).fadeIn(200);
  event.preventDefault();
})
$(".category__list li:first").click()


const footerBtn = $(".js-footer-btn")
footerBtn.click(function() {
 $(".footer__link-list").toggleClass("active")
})



const menuMobile = {
  init: function () {
    this.menuMobile();
  },
  menuMobile: function () {
    const menuBtn = $(".js-mb-btn");
    const menuMobile = $(".menumobile");
    const menuOverlay = $(".menumobile-overlay");

    menuBtn.click(function () {
      menuMobile.addClass("active");
    });

    menuOverlay.click(function () {
      menuMobile.removeClass("active");
    });
  },
};

const slideDownMenu = {
  init: function () {
    this.subMenuChild();
  },
  subMenuChild: function () {
    $(".js-slide-down-menu").click(function (event) {
      const target = $(this).parent().next(".submenu-mb");
      const item = $(this).parent().parent(".menumobile-item");
      if ($(this).hasClass("fa fa-plus")) {
        $(this).removeClass("fa fa-plus");
        $(this).addClass("fa fa-minus");
      } else if ($(this).hasClass("fa fa-minus")) {
        $(this).removeClass("fa fa-minus");
        $(this).addClass("fa fa-plus");
      }
      $(item).toggleClass("active");
      $(target).slideToggle(300);
      event.preventDefault();
    });
  },
};

$(".js-cat-btn").click(function() {
  $(".category__list li").click(function() {
    $(".category__list").removeClass("active");
  })
  $(".category__list").toggleClass("active")
})


const backTop = {
  init: function() {
      this.backTop()
  },
  backTop: function() {
      $(window).scroll(function() {
          if($(window).scrollTop() > 150) {
              $('.back-top').addClass('active')
          }else {
              $('.back-top').removeClass('active')
          }
        });
  }
}



const thumb = $(".thumb-img")
const thumbBig = $(".thumb-big")

thumb.click(function() {
    thumbBig.hide()
    const idThumbBig = $(this).attr("data-thumb-big")
    $(idThumbBig).show()
    const imgUrl = $(this).attr("src")
    thumbBig.attr({"src":imgUrl, "data-zoom-image":imgUrl})
    $(idThumbBig).elevateZoom({
      zoomType : "inner",
      cursor: "crosshair"
    });
})

$(".product-detail__thumb li:first img").click()

$(".product-detail__thumb li img").click(function() {
  $(".product-detail__thumb li img").removeClass("active")
  $(this).addClass("active")
})


const productTab = $(".tab-product li a");
const productPane = $(".pane")
productTab.click(function(e) {
  productTab.removeClass("active")
  $(this).addClass("active")
  productPane.hide()
  const pane = $(this).attr("data-pane")
  $(pane).fadeIn(200)
  e.preventDefault()
})

$(".tab-product li:first a").click()