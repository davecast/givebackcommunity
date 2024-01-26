document.addEventListener("DOMContentLoaded", function () {
  const testimonialWrapper = document.querySelector(".testimonial_wrapper");
  const splideHome = document.getElementById("splideHome");

  let msnryTestimonial = new Masonry(testimonialWrapper, {
    // options
    itemSelector: ".testimonial_item",
    columnWidth: 469,
    gutter: 30,
  });

  if (!!splideHome) {
    var splide = new Splide("#splideHome", {
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
});
