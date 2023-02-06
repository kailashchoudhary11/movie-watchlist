class Movie {
    constructor(data) {
        console.log(data);
        Object.assign(this, data);
    }
    /*
Genre
: 
"Drama, Sport"
Plot
: 
"Three friends growing up in India at the turn of the millennium set out to open a training academy to produce the country's next cricket stars."
Poster
: 
"https://m.media-amazon.com/images/M/MV5BMTgwNTAwMjEzMF5BMl5BanBnXkFtZTcwNzMzODY4OA@@._V1_SX300.jpg"
Ratings
: 
(3) [{…}, {…}, {…}]
Runtime
: 
"120 min"
Title
: 
"Kai Po Che"
imdbRating
: 
"7.8"
*/
    getMovieHtml() {
        const {Poster, Title, imdbRating, Runtime, Genre, Plot} = this;
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
                        <button class="add-btn">
                            <img src="./images/add-icon.png" alt="add-icon">
                            Watchlist
                        </button>
                    </div>
                    <div class="movie-description">
                        ${Plot.endsWith("...") ? Plot + `<span class="white-txt">Read More</span>` : Plot}
                    </div>
                </div>
            </div>
            <br class="movie-end">
        `;
    }
}

export default Movie;
