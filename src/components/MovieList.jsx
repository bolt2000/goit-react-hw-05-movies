import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from 'pages/MovieList.module.css';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.older}>
        {movies.map(
          ({ id, original_title, title, poster_path, original_name }) => {
            return (
              <li key={id}>
                {/* <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/original${poster_path}`
                      : 'https://i.postimg.cc/g2dNFPgn/Placeholder.png'
                  }
                  alt={title || original_title || original_name}
                  width="240px"
                /> */}
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title || title}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};

export default MoviesList;
