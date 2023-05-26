
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd923cfd5f948398665667bae929771df';
// const PER_PAGE = 12;

export const getMovies = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return await res.json();
};

export const getSearchMovie = async movieId => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${movieId}&page=1&include_adult=false`
  );
  return await res.json();
};

export const getMoviesDetails = async movieId => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return await res.json(res);
};

export const getMoviesCredits = async movieId => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return await res.json();
};

export const getMoviesReviews = async movieId => {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1?`
  );
  return await res.json();
};
