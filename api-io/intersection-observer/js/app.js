const $image1 = document.getElementById("imagen1");
const $image2 = document.getElementById("imagen2");

const loadImage = (entry, observer) => {
  //   console.log(entry, observer);
  entry.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("visible");
    } else {
      element.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(loadImage, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
});

observer.observe($image1);
observer.observe($image2);
