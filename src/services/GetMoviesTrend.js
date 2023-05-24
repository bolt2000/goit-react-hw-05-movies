

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd923cfd5f948398665667bae929771df';
// const PER_PAGE = 12;

export const getMovies = () => {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};

export const getSearchMovie = (movieId) => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${movieId}&page=1&include_adult=false`
  ).then(res => res.json());
};

export const getMoviesDetails = (movieId) => {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US'`
  ).then(res => res.json());
};





// export const getMoviesCredits = () => {
//   return fetch(
//     `${BASE_URL}/movie/movie_id/credits?api_key=${API_KEY}`
//   ).then(res => res.json());
// };

// export const getMoviesReviews = () => {
//   return fetch(
//     `${BASE_URL}/movie/movie_id/reviews?api_key=${API_KEY}&language=en-US&page=1?`
//   ).then(res => res.json());
// };

// const fetch = require('node-fetch');

// const url =
//   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
// const options = { method: 'GET', headers: { accept: 'application/json' } };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
// const options = { method: 'GET', headers: { accept: 'application/json' } };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
