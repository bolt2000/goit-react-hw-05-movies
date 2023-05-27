import { useState, useEffect } from 'react';
import css from './Home.module.css'
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSearchMovie } from 'services/GetMoviesTrend';
import MoviesList from 'components/MovieList';
import Loading from 'components/Loading';

const SearchMovie = ({ onSubmit }) => {
  // const location = useLocation();
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

    getSearchMovie(movieId).then(movies => {
      setMovies(movies.results);

      setIsLoading(false);
    });
  }, [movieId]);

  const updateQueryString = evt => {
    evt.preventDefault();
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };


  //   const onChange = e => {
  //     setMovies(e.target.value);
  //   };

  // const hendleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit(movies);
    
  // };

  // const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <>
      <div>
        <form
          className={css.form}
          // onSubmit={hendleSubmit}
        >
          <input
            className={css.input}
            value={movieId}
            type="text"
            onChange={updateQueryString}
            placeholder="Search movie"
            autoComplete="off"
          />
          {/* <button type="Submit" children="Search">
            --Search--
          </button> */}
          {/* <h3>Result search movie</h3> */}
        </form>

        {isLoading && <Loading />}

        <MoviesList movies={movies} />
      </div>
    </>
  );
};


SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovie;
