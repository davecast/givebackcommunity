document.addEventListener("DOMContentLoaded", function () {
  const testimonialWrapper = document.getElementById("testimonialWrapper");
  const splideHome = document.getElementById("splideHome");
  const splideProgramsOne = document.getElementById("splideProgramsOne");
  const splideProgramsTwo = document.getElementById("splideProgramsTwo");
  const splideProgramsThree = document.getElementById("splideProgramsThree");
  const splideProgramsFour = document.getElementById("splideProgramsFour");

  if (!!testimonialWrapper) {
    let msnryTestimonial = new Masonry(testimonialWrapper, {
      // options
      itemSelector: ".testimonial_item",
      columnWidth: 469,
      gutter: 30,
    });
  }

  if (!!splideHome) {
    const splide = new Splide("#splideHome", {
      type: "loop",
      drag: "free",
      snap: true,
      perPage: 3,
      pagination: false,
      autoplay: true,
      focus: 0,
      omitEnd: true,
      interval: 2000,
    });

    splide.mount();
  }

  if (!!splideProgramsOne) {
    const splideOne = new Splide("#splideProgramsOne", {
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
    });

    splideOne.mount();
  }

  if (!!splideProgramsTwo) {
    const splideTwo = new Splide("#splideProgramsTwo", {
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
    });

    splideTwo.mount();
  }

  if (!!splideProgramsThree) {
    const splideThree = new Splide("#splideProgramsThree", {
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
    });

    splideThree.mount();
  }

  if (!!splideProgramsFour) {
    const splideFour = new Splide("#splideProgramsFour", {
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
    });

    splideFour.mount();
  }

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
