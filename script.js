// Selección de elementos
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const movieList = document.getElementById('movie-list');
const movies = document.querySelectorAll('.movie-card');

// Función para filtrar películas
function searchMovies() {
    const query = searchBar.value.toLowerCase();
    movies.forEach(movie => {
        const title = movie.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
}

// Asignar evento al botón de búsqueda
searchButton.addEventListener('click', searchMovies);

// Permitir búsqueda al presionar Enter
searchBar.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchMovies();
    }
});

// Mostrar listado de películas relacionadas
function showMovieList(saga) {
    window.location.href = `peliculas/${saga}/index.html`;
}

// Mostrar listado de anime
function showAnimeList(anime) {
    window.location.href = `anime/${anime}/index.html`;
}

