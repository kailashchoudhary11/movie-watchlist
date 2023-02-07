const moviesContainer = document.getElementById("movies");
const loaderEl = document.getElementById("loader"); 

function load(timeout=2000) {
    setTimeout(() => {
        toggle();
    }, timeout);
    toggle();
}

function toggle() {
    moviesContainer.classList.toggle("hidden");
    loaderEl.classList.toggle("hidden");
}

export {load, toggle};