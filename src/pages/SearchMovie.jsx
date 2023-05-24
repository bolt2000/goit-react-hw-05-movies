import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [movies, setMovies] = useState(
    [
    // 'movie-1',
    // 'movie-2',
    // 'movie-3',
    // 'movie-4',
  ]
  );

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  
  // console.log(searchParams);
  // useEffect(() => {
  //     console.log(movieId);
  // }, [movieId]);

  const updateQueryString = evt => {
    const moviIdValue = evt.target.value;
    if (moviIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: moviIdValue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));


  return (
    <div>
      <input value={movieId} type="text" onChange={updateQueryString} />
      <button type="Submit" onClick={() => setSearchParams()}>--Search--</button>
      <h3>Result search movie</h3>
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMovie;
