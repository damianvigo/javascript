let page = 1;
let movies = "";
let lastMovie;
/* const backBtn = document.getElementById("btnAnterior");
const nextBtn = document.getElementById("btnSiguiente");

nextBtn.addEventListener("click", () => {
  if (page < 1000) {
    page += 1;
    loadMovies();
  }
});

backBtn.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    loadMovies();
  }
}); */

let observer = new IntersectionObserver(
  (entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        page++;
        loadMovies();
      }
    });
  },
  {
    rootMargin: "0px 0px 200px 0px",
    treshhold: 1.0,
  }
);

const loadMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${page}`
    );

    console.log(response);

    if (response.status === 200) {
      const data = await response.json();

      data.results.forEach((movie) => {
        movies += `
		<div class='pelicula'>
		<img class='poster' src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
		<h3 class='titulo'>${movie.title}</h3>
		</div>
		`;
      });

      document.getElementById("contenedor").innerHTML = movies;

      if (page < 1000) {
        if (lastMovie) observer.unobserve(lastMovie);

        const moviesOnScreen = document.querySelectorAll(
          ".contenedor .pelicula"
        );
        // console.log(moviesOnScreen);

        lastMovie = moviesOnScreen[moviesOnScreen.length - 1];

        observer.observe(lastMovie);
      }
    } else if (response.status === 401) {
      console.log("invalid key");
    } else if (response.status === 404) {
      console.log("not found");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

loadMovies();
