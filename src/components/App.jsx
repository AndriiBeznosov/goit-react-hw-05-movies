import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ShraedLayout from './SharedLayout/SharedLayout';
import NotFound from './page/NotFound/NotFound';
import MovieDetails from './page/MovieDetails/MovieDetails';

const Home = lazy(() => import('./page/Home/Home'));
const Movies = lazy(() => import('./page/Movies/Movies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShraedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
