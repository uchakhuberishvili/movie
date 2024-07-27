const movies = [
    { title: "The Dark Knight", year: 2008 },
    { title: "Inception", year: 2010 },
    { title: "Interstellar", year: 2014 },
    { title: "Joker", year: 2019 },
    { title: "Tenet", year: 2020 },
];
function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));

    const movieListContainer = document.getElementById('movieList');
    movieListContainer.innerHTML = '';

    filteredMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `<h3>${movie.title} (${movie.year})</h3>`;
        movieListContainer.appendChild(movieElement);
    });

    if (filteredMovies.length === 0) {
        const noResultsElement = document.createElement('div');
        noResultsElement.classList.add('movie');
        noResultsElement.textContent = 'No movies found';
        movieListContainer.appendChild(noResultsElement);
    }
}
