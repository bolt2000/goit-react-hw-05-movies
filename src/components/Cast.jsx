import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesCredits } from 'services/GetMoviesTrend';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMoviesCredits(movieId).then(res => {
      setCast(res.cast);
      console.log(res.cast);
    });
  }, [movieId]);

  return (
    <ul>
      {cast.length === 0 && <h3>We don't have any reviews for this movie</h3>}

      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={'https://image.tmdb.org/t/p/w500' + profile_path}
            alt={name}
            loading="lazy"
            width={160}
            onError={e =>
              (e.target.src =
                'https://via.placeholder.com/160x240?text=No+photo')
            }
          />
          <div>
            <h3>{name}</h3>
            <p>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
