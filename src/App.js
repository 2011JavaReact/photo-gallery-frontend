import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import ViewPhotos from './components/pages/ViewPhotos';
import AddPhotos from './components/pages/AddPhotos';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/photos" component={ViewPhotos}/>
        <Route path="/addphotos" component={AddPhotos}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/> 
        <Route path="/" render={()=> <div>404 NOT FOUND !</div>}/>   
      </Switch>
    </Router>
  );
}

export default App;