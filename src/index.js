import Movie from "./Movie.js";
import { toggle } from "./utils.js";
const searchForm = document.getElementById("search-form");
const searchTextEl = document.getElementById("search-text");
const moviesContainer = document.getElementById("movies");
let moviesData = [];
let watchList = JSON.parse(localStorage.getItem("watchlist")) || [];

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchText = searchTextEl.value;
    toggle();
    moviesData = await getMoviesData(searchText);
    renderMovies();
});

async function getMoviesData(searchText) {
    const resultData = [];
    const res = await fetch(
        `https://www.omdbapi.com/?s=${searchText}&apikey=83ab7c1e&type=movie`
    );
    const data = await res.json();
    if (data.Response === "True") {
        for (let movie of data.Search.slice(0, 5)) {
            const res = await fetch(
                `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=83ab7c1e&type=movie&plot=short`
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
        renderHtml = moviesData
            .map((movie) => new Movie(movie).getMovieHtml())
            .join("");
        moviesContainer.classList.add("full-height");
    } else {
        renderHtml = `
            <div class="initial not-found">
                Unable to find what you're looking 
                for.
                Please try another search.
            </div>
        `;
        moviesContainer.classList.remove("full-height");
    }

    moviesContainer.innerHTML = renderHtml;
    addToWatchList();

    toggle();
}

function addToWatchList() {
    const btns = document.getElementsByClassName("watchlist-btn");
    for (let btn of btns) {
        btn.addEventListener("click", (event) => {
            const movie = moviesData.filter(
                (movie) => movie.imdbID === event.target.dataset.imdbid
            )[0];
            if (!watchList.find((tempMovie) => tempMovie === movie)) {
                watchList.unshift(movie);
                localStorage.setItem("watchlist", JSON.stringify(watchList));
            }
        });
    }
}
