import DepartList from 'pages/DepartList/DepartList';
import Home from 'pages/Home/Home';
import PackInfo from 'pages/PackInfo/PackInfo';
import { Routes, Route, Navigate } from 'react-router-dom';

import routes from 'utils/routes';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route path={routes.home} element={<Home />}>
          <Route path={routes.packInfo} element={<PackInfo />} />
        </Route>
        <Route path={routes.departList} element={<DepartList />} />
        {/* <Route path={routes.movieId} element={<MovieDetails />}>
          <Route path={routes.cast} element={<Cast />} />
          <Route path={routes.reviews} element={<Reviews />} />
        </Route> */}
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
