import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/GetMoviesTrend';
import { Audio } from 'react-loader-spinner';

const SearchMovie = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    if (movieId === '') {
      return;
    }
    setMovies([]);
    setIsLoading(true);

    getSearchMovie(movieId).then(movies => {setMovies(movies.results);

      setIsLoading(false);
      // console.log(movieId);
    });
  }, [movieId]);

  const updateQueryString = evt => {
    evt.preventDefault();
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
    // console.log(movieIdValue);
  };

  // const hendleSubmit = e => {
  //   e.preventDefault();
  //   setMovies(movieId);
  //   setMovies('');
  // };

  // const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <>
      {isLoading && (
        <Audio
          className="true"
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <div>
        <form
          // onSubmit={hendleSubmit}
        >
          <input
            value={movieId}
            type="text"
            onChange={updateQueryString}
            // onSubmit={updateQueryString}
            placeholder="Search movie"
            autoComplete="off"
          />
          <button type="Submit">--Search--</button>
          {/* <h3>Result search movie</h3> */}
        </form>
        <ul>
          {movies.map(({ movie, original_title, name, id}) => {
            return (
              <li key={movie}>
                <Link to={`/movies/${movieId}`} state={{ from: location }}>
                  {original_title || name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchMovie;
