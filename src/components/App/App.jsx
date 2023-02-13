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
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import LinkedIn from '../LinkedIn/LinkedIn';
import Resume from '../Resume/Resume';
import JQueryCalcPage from '../JqueryCalcPage/JqueryCalcPage';
import Surveys from '../Surveys/Surveys';
import Todo from '../Todo/Todo';
import './App.css';
function App() {

  return (
    <BrowserRouter>
    <Nav/>
    
    <Route path="/about">
    <AboutPage/>
      </Route>

    <Route path="/home">
      <HomePage/>
    </Route>

    <Route path="/todolist">
      <Todo/>
    </Route>

    <Route path="/reduxsurveys">
      <Surveys/>
    </Route>
    <Route path="/nav">
      <Nav/>
    </Route>
    <Route path="/queerspaceCollective">
      <QueerspaceCollective/>
    </Route>
    
    <Route path="/jqueryCalculator">
      <JQueryCalcPage/>
    </Route>

    <Route path="/missingLink">
      <MissingLink/>
    </Route>
    <Route path="/Resume">
      <Resume/>
    </Route>
    <Route path="/footer">
      <Footer/>
    </Route>

    <Route path="/linkedIn">
      <LinkedIn/>
    </Route>
      
    <Route path="/contact">
      <Contact/>
    </Route>

    <Route exact path="/" component={Landing}/>
  </BrowserRouter>
  );
}

export default App;
