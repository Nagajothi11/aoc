import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BaseLayout from './layout/base'
import routes from './helper/routes';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          {routes.map(route => {
            return <Route element={route.component} key={route.path} path={route.path} />
          })}
        </Route>
      </Routes>
    </Router>
  )
}
