import Movie from "./Movie.js";

const searchForm = document.getElementById("search-form");
const searchTextEl = document.getElementById("search-text");
const moviesContainer = document.getElementById("movies");
let moviesData = [];

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchText = searchTextEl.value;
    moviesData = await setMoviesData(searchText);
    renderMovies();
});

async function setMoviesData(searchText) {
    const resultData = [];
    const res = await fetch(
        `http://www.omdbapi.com/?s=${searchText}&apikey=83ab7c1e&type=movie`
    );
    const data = await res.json();
    if (data.Response === "True") {
        for (let movie of data.Search.slice(0, 2)) {
            const res = await fetch(
                `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=83ab7c1e&type=movie&plot=short`
            );
            const data = await res.json();
            resultData.push(data);
        }
    }
    return resultData;
}

function renderMovies() {
    let renderHtml = "";
    if (moviesData.length > 0) {
        renderHtml = moviesData.map(movie => new Movie(movie).getMovieHtml()).join("");
        moviesContainer.classList.add("full-height");
    } else {
        renderHtml = `
        <div class="not-found">
        Unable to find what you're looking 
        for.
        Please try another search.
        </div>
        `
        moviesContainer.classList.remove("full-height");
    }
    moviesContainer.innerHTML = renderHtml;
}