import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesReviews } from 'services/GetMoviesTrend';

const Rewievs = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getMoviesReviews(movieId).then(review => {
      setReview(review.results);
      console.log(review.results);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {review.map(({ author, content, id }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
      {review.length === 0 && <h3>We don't have any reviews for this movie</h3>}
    </>
  );
};

export default Rewievs;

