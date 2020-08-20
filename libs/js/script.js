$(document).ready(function () {
  //! Burger Menu
  $(".header-burger").on("click", function () {
    $(".header-burger, .nav").toggleClass("active");
    $("html").toggleClass("lock");
  });

  //! Navbar scroll
  $(".nav-item a").on("click", function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1500
    );
    $(".header-burger, .nav").removeClass("active");
    $("html").removeClass("lock");
  });


  $(".footer-body__link a").on("click", function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1500
    );
  });
});
