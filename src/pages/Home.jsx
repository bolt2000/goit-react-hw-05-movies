import { useEffect, useState } from 'react';
import { getMovies } from 'services/GetMoviesTrend';
import css from './Home.module.css';
import MoviesList from 'components/MovieList';
import Loading from 'components/Loading';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMovies().then(movies => {
      setMovies(movies.results);
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
