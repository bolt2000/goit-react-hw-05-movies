import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'services/GetMoviesTrend';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getMoviesDetails(movieId)
      .then(res => setMovie(res))
      .catch(error => {
        setError(error.message);
      });

    console.log(movieId);

    if (error) {
      return <h1>Don't play with URL please. It's not funny</h1>;
    }
  }, [error, movieId]);

  const {
    original_title,
    overview,
    genres,
    release_date,
    vote_average,
    poster_path,
  } = movie;

  return (
    <>
      <Link className={css.btn} to={backLinkLocation.current}>
        Go back
      </Link>

      <div className={css.fl}>
        <img
          src={`${IMG_PATH}/${poster_path}`}
          alt={original_title}
          width="240px"
        />
        <div className={css.fl2}>
          <h2>
            {original_title} ({parseFloat(release_date)})
          </h2>
          <p>{`User score: ${Math.round(vote_average * 10)}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && (
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>Additional information</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
