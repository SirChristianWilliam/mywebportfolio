import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import MissingLink from '../MissingLink/MissingLink';
import Nav from '../Nav/Nav';
import QueerspaceCollective from '../QueerspaceCollective/QueerspaceCollective';

function App() {

  return (
    <BrowserRouter>
    <Route path="/about" component={AboutPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/nav" component={Nav} />
    <Route path="/queerspaceCollective" component={QueerspaceCollective} /> 
    <Route path="/missingLink" component={MissingLink} />
    <Route path="/footer" component={Footer} />

  </BrowserRouter>
  );
}

export default App;
