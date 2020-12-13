import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import ViewPhotos from './components/pages/ViewPhotos';
// import ViewPhotosPage from './components/pages/ViewPhotosPage';
import AddPhotos from './components/pages/AddPhotos';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import React, { useEffect, useState } from 'react';
// import Footer from './components/Footer';
import UpdatePhotos from './components/pages/UpdatePhotos';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/photos" component={ViewPhotos}/>
        <Route exact path="/addphotos" component={AddPhotos}/>
        <Route exact path="/updatephotos" component={UpdatePhotos}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/" render={()=> <div>404 NOT FOUND !</div>}/>   
      </Switch>
    </Router>
  );
}

export default App;