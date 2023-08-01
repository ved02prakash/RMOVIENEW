import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {landingPage, movieDTO} from './movies/movies.model'
import Menu from './Menu';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import routes from './route-config'
import configureValidations from './validations';

configureValidations();
function App() { 
      
  return (
    <BrowserRouter>
    <Menu/>

    <div className='container'>
      <Switch>
          {routes.map(route=> 
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component/>
            </Route>
            )}
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
