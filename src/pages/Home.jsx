import { useEffect, useState } from "react";
import { getMovies } from 'services/GetMoviesTrend';
import { Link, useLocation } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import css from './Home.module.css'





const Home = () => {
const location = useLocation();
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
      <main>
        <h1 className={css.h1}>Top Movies for today</h1>
        <ul
          className={css.sample08}
        >
          {movies.map(({ id, original_title, title }) => {
            return (
              <li className={css.list} key={id}>
                <Link
                  className={css.link}
                  to={`/movies/${title}`}
                  state={{ from: location }}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );



};

export default Home;
