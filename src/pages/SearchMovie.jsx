import { Link } from 'react-router-dom';

const SearchMovie = () => {
  return (
    <div>
      <h3>Result search request</h3>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            <li>{movie}</li>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchMovie;
