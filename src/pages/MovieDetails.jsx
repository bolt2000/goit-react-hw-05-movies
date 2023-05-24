// import { useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(movieId);

  // useEffect(() => {
  //   return () => {
  //     //   Http request
  //   };
  // }, []);

  return (
    <>
      <h2>MovieDetail: {movieId}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <li>
          <Link to="rewievs">Rewievs</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};

export default MovieDetails;
