import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import css from 'pages/Home.module.css';
// import { useLocation } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';

const Loading = () => {

  return (
    <>
       (
        <Audio
          className="true"
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )
    </>
  );
};

Loading.propTypes = {
  moviesData: PropTypes.array.isRequired,
};

export default Loading;
