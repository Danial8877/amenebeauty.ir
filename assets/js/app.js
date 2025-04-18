// phone //
let call = document.getElementById("call_ok");

call.addEventListener("click", () => {
  Swal.fire({
    title: "۰۹۲۱۱۷۶۷۳۷۷",
    text: " شماره تلفن ",
    confirmButtonText: "<a href='tel://09211767377' class='btn_sweetalert'> تماس </a>"
  });
});

// scroll //

$(document).ready(function (event) {
  let scroll_top = $(".scroll-top");

  console.log(scroll_top);

  scroll_top.hide(300);

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      scroll_top.show(300);
    } else {
      scroll_top.hide(300);
    }
  });

  scroll_top.click(function () {
    $("html").animate({ scrollTop: 0 }, 1000);
  });
});

// preloader //

const before_load = document.getElementById("before_load");
const after_load = document.getElementById("after_load");

after_load.style.display = "none";
before_load.style.display = "";

window.onload = function () {
  before_load.style.display = "none";
  after_load.style.display = "";

};
