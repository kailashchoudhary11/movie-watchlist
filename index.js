const searchForm = document.getElementById("search-form");
const searchTextEl = document.getElementById("search-text");
const moviesContainer = document.getElementById("movies");
let moviesData = [];

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchText = searchTextEl.value;
    moviesData = getMoviesData(searchText);
});

async function getMoviesData(searchText) {
    const res = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=83ab7c1e`);
    const data = await res.json(); // Search: Array(10), totalResults: '1015', Response: 'True'
    return data.Response ? data.Search : [];
}
