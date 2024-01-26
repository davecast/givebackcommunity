document.addEventListener("DOMContentLoaded", function () {
  const testimonialWrapper = document.getElementById("#testimonialWrapper");
  const splideHome = document.getElementById("splideHome");
  const splideProgramsOne = document.getElementById("splideProgramsOne");
  const splideProgramsTwo = document.getElementById("splideProgramsTwo");
  const splideProgramsThree = document.getElementById("splideProgramsThree");
  const splideProgramsFour = document.getElementById("splideProgramsFour");

  if (testimonialWrapper) {
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
});
