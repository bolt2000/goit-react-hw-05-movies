import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from 'pages/MovieList.module.css';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.older}>
        {movies.map(({ id, original_title, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title || title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};

export default MoviesList;
