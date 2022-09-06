const owl = $(".slide__one");

owl.owlCarousel({
  loop: true,
  margin: 20,
  startPosition: 0,
  items: 1,
  responsive: {
    540: {
      items: 1,
      startPosition: 1,
    },
    1200: {
      items: 4,
      margin: 30,
    },
  },
});
$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

const owls = $(".slide-two");
owls.owlCarousel({
  loop: true,
  dots: true,
  smartSpeed: 2000,
  items: 1,
  responsive: {
    540: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

$(".btn__next").click(function () {
  owls.trigger("next.owl.carousel");
});

$(".btn__prev").click(function () {
  owls.trigger("prev.owl.carousel");
});
