import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import SearchMovie from 'pages/SearchMovie';
import MovieDetails from 'pages/MovieDetails';
import  Cast  from 'components/Cast';
import  Rewievs  from 'components/Reviews';
import { Layout } from './Layout';


export const App = () => {



  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="movies"
          element={<SearchMovie />}
        />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="rewievs" element={<Rewievs />} />
        </Route>
      </Route>
    </Routes>
  );
};
