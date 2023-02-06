import Movie from "./Movie.js";
const watchList = JSON.parse(localStorage.getItem("watchlist")) || [];
const moviesContainer = document.getElementById("movies");
console.log(watchList);
function renderWatchlist() {
    if (watchList.length > 0) {
        const renderHtml = watchList.map((movie) => new Movie(movie).getMovieHtml(true)).join("");
        moviesContainer.classList.add("full-height");
        moviesContainer.innerHTML = renderHtml;
    } 
}

renderWatchlist();