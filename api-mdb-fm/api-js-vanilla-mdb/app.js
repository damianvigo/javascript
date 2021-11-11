let page = 1;
const backBtn = document.getElementById("btnAnterior");
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
});

const loadMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${page}`
    );

    console.log(response);

    if (response.status === 200) {
      const data = await response.json();

      let movies = "";
      data.results.forEach((movie) => {
        movies += `
		<div class='pelicula'>
		<img class='poster' src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
		<h3 class='titulo'>${movie.title}</h3>
		</div>
		`;
      });

      document.getElementById("contenedor").innerHTML = movies;
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
