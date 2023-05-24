import { useEffect, useState } from "react";
import { getMovies } from 'services/GetMoviesTrend';
import { Link } from 'react-router-dom';





const Home = () => {

  const [movies, setMovies] = useState([]);

useEffect(() => {
  getMovies(movies).then(movies => {setMovies(movies.title)});
}, []);
    

  return (
    <main>
      <h1>Top movies 2023</h1>
      
        {movies.map(({ id, title}, index) => {
          return (
            <li key={id}>
              <Link to={`${title}`}>{title}</Link>
            </li>
          );
        })}
      
    </main>
  );



};

export default Home;
