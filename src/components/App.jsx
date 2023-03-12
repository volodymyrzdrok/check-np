import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import routes from 'utils/routes';
import Layout from './Layout/Layout';
const Home = lazy(() => import('pages/Home/Home'));
const PackInfo = lazy(() => import('pages/PackInfo/PackInfo'));
const DepartList = lazy(() => import('pages/DepartList/DepartList'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route path={routes.home} element={<Home />}>
          <Route path={routes.packInfo} element={<PackInfo />} />
        </Route>
        <Route path={routes.departList} element={<DepartList />} />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};
