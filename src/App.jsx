import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import '../src/components/scss/styles.scss'

import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import MissingLink from './components/MissingLink/MissingLink';
import Nav from './components/Nav/Nav';
import QueerspaceCollective from './components/QueerspaceCollective/QueerspaceCollective';
import Contact from './components/Contact/Contact';
import Landing from './components/Landing/Landing';
import LinkedIn from './components/LinkedIn/LinkedIn';
import Resume from './components/Resume/Resume';
import JQueryCalcPage from './components/JqueryCalcPage/JqueryCalcPage';
import Surveys from './components/Surveys/Surveys';
import Todo from './components/Todo/Todo';
import Movies from './components/Movies/Movies';
import './App.css';
function App() {

  return (


    <BrowserRouter>
      <div  className='noclass'>	
	<div class="bird-container bird-container--one">
		<div class="bird bird--one"></div>
	</div>
	
	<div class="bird-container bird-container--two">
		<div class="bird bird--two"></div>
	</div>
	
	<div class="bird-container bird-container--three">
		<div class="bird bird--three"></div>
	</div>
	
	<div class="bird-container bird-container--four">
		<div class="bird bird--four"></div>
	</div>
	
</div>
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

    <Route path="/netclips">
      <Movies/>
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
