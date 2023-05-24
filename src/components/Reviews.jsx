import { useParams } from 'react-router-dom';

export const Rewievs = () => {
  const { movieId } = useParams();

  return <div>Rewievs: {movieId} </div>;
};
