import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from 'services/GetMoviesTrend';
// import { Audio } from 'react-loader-spinner';


const MovieDetails = () => {
  const { movieId } = useParams();
const location = useLocation();
const [movie, setMovie] = useState({});
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';
  // const [params, setParams] = useSearchParams();
  // setParams({id: '333333'});

  // const movieId = setParams.get('movieId');
  // console.log(movieId);

  const backLinkLocation = useRef(location.state?.from ?? '/movies');


  useEffect(() => {
    getMoviesDetails(movieId).then(setMovie)
      // console.log(info.result);
    
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocation.current}>Go back</Link>
      <h2>{movie.original_title}</h2>
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
            <li key={genre.id}>{genre.name}</li>
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
