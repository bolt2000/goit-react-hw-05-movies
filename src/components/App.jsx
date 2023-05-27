import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import Home from 'pages/Home';
// import SearchMovie from 'pages/SearchMovie';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';
import { Layout } from './Layout';



const Home = lazy(() => import('../pages/Home'));
const SearchMovie = lazy(() => import('../pages/SearchMovie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Reviews = lazy(() => import('../components/Reviews'));


const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovie />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
