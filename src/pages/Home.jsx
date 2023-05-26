import { useEffect, useState } from 'react';
import { getMovies } from 'services/GetMoviesTrend';
// import { useLocation } from 'react-router-dom';
// import { Audio } from 'react-loader-spinner';
import css from './Home.module.css';
import MoviesList from 'components/MovieList';
import Loading from 'components/Loading';

const Home = () => {
  // const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMovies().then(movies => {
      setMovies(movies.results);
      console.log(movies.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <h1 className={css.home}>Trending today</h1>

      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
