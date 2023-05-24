// import { useEffect } from "react";
import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
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
      <Link to={backLinkLocation.current}>Go back</Link>
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
