import { Fragment } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Training from '../pages/training';
import Create from '../pages/Create';
import Signin from '../pages/Login/signin';
import Signup from '../pages/Login/signup';

import useAuth from '../hooks/useAuth';
import UserConfig from '../pages/UserConfig';

const Private = () => {
  const { signed } = useAuth();

  return signed > 0 ? <Training /> : <Signin />;
};

const RouteUser = () => {
  const { signed } = useAuth();

  return signed > 0 ? <UserConfig /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/training" element={<Private />} />
        <Route path="/create" element={<Create />} />
        <Route path="/user-config" element={<UserConfig />}></Route>
        <Route path="*" element={<Signin />} />
      </Routes>
    </Fragment>
  );
};

export default RoutesApp;
