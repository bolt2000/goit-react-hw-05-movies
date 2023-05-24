
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd923cfd5f948398665667bae929771df';
// const PER_PAGE = 12;

export const getMovies = () => {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};





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