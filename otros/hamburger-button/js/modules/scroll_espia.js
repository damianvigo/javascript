const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll('section[data-scroll-spy]');

  const cb = (entries) => {
    entries.forEach((entry) => {
      // console.log('entry', entry);
      // console.log('observer', observer);
      const id = entry.target.getAttribute('id');
      console.log(id);
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    // root
    // rootMargin: '-250px'
    threshold: [0.5, 0.75], // threshold - limite - 0 y 1 - 0% y 100% - 0.5% 50% // entre 50% del contenido y su 75%
  });

  $sections.forEach((el) => observer.observe(el));
}
