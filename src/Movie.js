class Movie {
    constructor(data) {
        Object.assign(this, data);
    }

    getMovieHtml(isWatchlist) {
        const { Poster, Title, imdbRating, Runtime, Genre, imdbID, Plot } =
            this;
        return `
            <div class="movie">
                <img class="movie-poster" src="${Poster}" alt="${Title}'s Poster" />
                <div class="movie-details">
                    <div class="detail-header">
                        <div class="movie-title">${Title}</div>
                        <img src="./images/star.png" alt="star-icon">
                        <div class="movie-rating">${imdbRating}</div>
                    </div>
                    <div class="details-main">
                        <div class="movie-duration">${Runtime}</div>
                        <div class="movie-genre">${Genre}</div>
                        <button class="watchlist-btn" data-imdbid="${imdbID}">
                            <img data-imdbid="${imdbID}" src="./images/${
            isWatchlist ? "remove-icon" : "add-icon"
        }.png" alt="add-icon">
                            ${isWatchlist ? "Remove" : "Watchlist"}
                        </button>
                    </div>
                    <div class="movie-description">
                        ${
                            Plot.endsWith("...")
                                ? Plot +
                                  `<span class="white-txt">Read More</span>`
                                : Plot
                        }
                    </div>
                </div>
            </div>
            <hr class="${isWatchlist ?
                "movie-end-watchlist" : 
                "movie-end" 
            }">
        `;
    }
}

export default Movie;
