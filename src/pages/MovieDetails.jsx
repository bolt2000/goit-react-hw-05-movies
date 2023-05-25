import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'services/GetMoviesTrend';
// import { Audio } from 'react-loader-spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);
  // const [error, setError] = useState(null);
  const [movie, setMovie] = useState([]);
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    // if (!movieId) {
    //   return;
    // }

    // getMoviesDetails().then(setMovie);
    // console.log(movieId);
  
      getMoviesDetails(movieId)
        .then(res => setMovie(res))
 

    // getMoviesDetails(id)
    //   .then(setMovie())
    //   .catch(error => {
    //     setError(error.message);
    //   });
    // console.log(setMovie);

    // if (error) {
    //   return <h1>Don't play with URL please. It's not funny</h1>;
    // }
  }, [movieId]);

  // const {
  //   original_title,
  //   overview,
  //   genres,
  //   release_date,
  //   vote_average,
  //   vote_count,
  //   poster_path,
  // } = movie;

  return (
    <>
      {/* {!movieId && <Navigate to='/'/>} */}
      <Link to={backLinkLocation.current}>Go back</Link>
      <h2>{movieId.original_title}</h2>
      <img
        src={`${IMG_PATH}/${movie.poster_path}`}
        alt={movie.original_title}
        width="240px"
      />
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      {movie.genres && (
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.movieId}>{genre.name}</li>
          ))}
        </ul>
      )}
      <div>Additional information</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <li>
          <Link to="rewievs">Rewievs</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
