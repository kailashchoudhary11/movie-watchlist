import Movie from "./Movie.js";
import {load} from "./utils.js";
const watchList = JSON.parse(localStorage.getItem("watchlist")) || [];
const moviesContainer = document.getElementById("movies");

function renderWatchList() {
    let renderHtml = '';
    if (watchList.length > 0) {
        renderHtml = watchList.map((movie) => new Movie(movie).getMovieHtml(true)).join("");
        moviesContainer.classList.add("full-height");
    } else {
        renderHtml = `
            <div class="initial">
                <div class="initial-text">Your watchlist is looking a little empty...</div>
                <div class="add-movies">
                    <a href="index.html">
                        <img src="images/add-icon.png" alt="Add Movies">
                    </a>
                    <div>Let’s add some movies!</div>
                </div>
            </div>
        `
        moviesContainer.classList.remove("full-height");
    }
    moviesContainer.innerHTML = renderHtml;
    removeFromWatchList();
}

function removeFromWatchList() {
    const btns = document.getElementsByClassName("watchlist-btn");
    for (let btn of btns) {
        btn.addEventListener("click", event => {
           load(1000);
            for (let i = 0; i < watchList.length; i++) {
                if (watchList[i].imdbID === event.target.dataset.imdbid) {
                    watchList.splice(i, 1);
                    localStorage.setItem("watchlist", JSON.stringify(watchList));
                    renderWatchList();
                }
            }
        });
    }
}

renderWatchList();