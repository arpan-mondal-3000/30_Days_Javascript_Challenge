import { API_KEY } from "./conf.js";

const urlParams = new URLSearchParams(window.location.search);
const keywords = urlParams.get("keywords");
const query = keywords.replace(" ", "+");

const searchBar = document.querySelector("#movie");
searchBar.value = keywords;

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

const main = document.querySelector("#main");
main.innerHTML = "<h1>Searching please wait...</h1>";

fetch(url)
  .then((res) => res.json())
  .then((movies) => {
    console.log(movies);
    movies.results.forEach((e, idx) => {
      const genre_name = [];
      e.genre_ids.map((genre_id) => {
        genres.forEach((genre) => {
          if (genre.id === Number(genre_id)) {
            const genreTab = document.createElement("div");
            genreTab.className = "genre";
            genreTab.textContent = genre.name;
            genre_name.push(genreTab);
          }
        });
        return genre_name;
      });

      const movie_card = document.createElement("div");
      movie_card.className = "movie-card";
      movie_card.innerHTML = `<img src="https://image.tmdb.org/t/p/w400${e.backdrop_path}" alt="Movie poster" class="movie-poster">
          <div class="details">
             <div class="title">${e.title}</div>
             <div class="genres"></div>
             <div class="desc">${e.overview}</div>
          </div>
          <div class="release-date">Release date: ${e.release_date}</div>`;
      main.appendChild(movie_card);
      const genreDisplay = document.querySelectorAll(".genres");
      genre_name.forEach((genre) => {
        genreDisplay[idx].appendChild(genre);
      });
    });
  })
  .catch((e) => {
    main.innerHTML = "<h1 style='color:red'>Movie cannot be found!!!</h1>";
  });

const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywords = document.querySelector("#movie").value;
  document.querySelector("#movie").value = "";
  const url = `search.html?keywords=${encodeURIComponent(keywords)}`;
  window.location.href = url;
});
