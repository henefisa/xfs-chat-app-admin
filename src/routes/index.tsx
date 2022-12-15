import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import routePaths from './routesPaths';
import Layout from 'src/layout/Layout';

const Router: React.FC = () => {
  return (
    <Routes>
      {routePaths.map((route, index) => {
        const Content = route.component;

        return (
          <Route
            key={index}
            path={route.path}
            element={<Layout content={<Content />} />}
          />
        );
      })}
    </Routes>
  );
};

export default Router;
