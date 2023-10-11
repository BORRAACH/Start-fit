import { Fragment } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Training from '../pages/training';
import Create from '../pages/Create';
import Signin from '../pages/Login/signin';
import Signup from '../pages/Login/signup';

import useAuth from '../hooks/useAuth';

const Private = () => {
  const { signed } = useAuth();

  return signed > 0 ? <Home /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Private />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/training" element={<Training />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </Fragment>
  );
};

export default RoutesApp;
