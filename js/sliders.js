function slider(name) {
  let slideposition = 1;

  viewSlide(slideposition);

  let nextbtn = document.querySelector("#" + name + " .prev");
  let prevbtn = document.querySelector("#" + name + " .next");

  function slideMover(n) {
    viewSlide((slideposition += n));
  }

  nextbtn.addEventListener("click", function () {
    slideMover(1);
  });
  prevbtn.addEventListener("click", function () {
    slideMover(-1);
  });

  function viewSlide(n) {
    let i;
    let slides = document.querySelectorAll("#" + name + " .slides");
    console.log(slides.length);
    if (n > slides.length) {
      slideposition = 1;
    }
    if (n < 1) {
      slideposition = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    console.log(slideposition);
    slides[slideposition - 1].style.display = "block";
  }
}
slider("work");
slider("reviews");
