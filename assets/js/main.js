const OPTIONS_SLIDER_PROGRAMS = {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
  pagination: false,
  autoplay: true,
  focus: 0,
  omitEnd: true,
  padding: 0,
  gap: 20,
  interval: 2000,
  mediaQuery: "max",
  breakpoints: {
    1280: {
      perPage: 1,
      pagination: true,
    },
  },
};

const OPTION_SLIDER_HOME = {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
  pagination: false,
  autoplay: true,
  focus: 0,
  omitEnd: true,
  interval: 2000,
};

document.addEventListener("DOMContentLoaded", function () {
  const testimonialWrapper = document.getElementById("testimonialWrapper");
  const splideHome = document.getElementById("splideHome");
  const splideProgramsOne = document.getElementById("splideProgramsOne");
  const splideProgramsTwo = document.getElementById("splideProgramsTwo");
  const splideProgramsThree = document.getElementById("splideProgramsThree");
  const splideProgramsFour = document.getElementById("splideProgramsFour");

  if (!!splideHome) {
    const splide = new Splide("#splideHome", OPTION_SLIDER_HOME);
    splide.mount();
  }

  if (!!splideProgramsOne) {
    const splideOne = new Splide("#splideProgramsOne", OPTIONS_SLIDER_PROGRAMS);
    splideOne.mount();
  }

  if (!!splideProgramsTwo) {
    const splideTwo = new Splide("#splideProgramsTwo", OPTIONS_SLIDER_PROGRAMS);
    splideTwo.mount();
  }

  if (!!splideProgramsThree) {
    const splideThree = new Splide(
      "#splideProgramsThree",
      OPTIONS_SLIDER_PROGRAMS
    );
    splideThree.mount();
  }

  if (!!splideProgramsFour) {
    const splideFour = new Splide(
      "#splideProgramsFour",
      OPTIONS_SLIDER_PROGRAMS
    );
    splideFour.mount();
  }

  if (!!testimonialWrapper) {
    let msnryTestimonial = new Masonry(testimonialWrapper, {
      // options
      itemSelector: ".testimonial_item",
      columnWidth: 469,
      gutter: 30,
    });
  }

  //MENU ACTIONS

  const menuClose = document.getElementById("menuClose");
  const menuBar = document.getElementById("menuBar");
  const menu = document.getElementById("menu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

  const toogleMenu = (e) => {
    menuClose.classList.toggle("mobile_menu_active");
    menuBar.classList.toggle("mobile_menu_active");
    menu.classList.toggle("show_menu");
    menu.classList.toggle("hidden_menu");
    mobileMenuOverlay.classList.toggle("mobile_menu_overlay_active");
  };

  menuClose.addEventListener("click", toogleMenu);
  menuBar.addEventListener("click", toogleMenu);
  mobileMenuOverlay.addEventListener("click", toogleMenu);
});
