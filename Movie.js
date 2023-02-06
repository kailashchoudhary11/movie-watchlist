class Movie {
    constructor(data) {
        // console.log(data);
        Object.assign(this, data);
    }

    getMovieHtml() {
        const { Poster, Title, imdbRating, Runtime, Genre, imdbID, Plot } = this;
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
                        <button class="add-btn" data-imdbid="${imdbID}">
                            <img src="./images/add-icon.png" alt="add-icon">
                            Watchlist
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
            <br class="movie-end">
        `;
    }
}

export default Movie;
