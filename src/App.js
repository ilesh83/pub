import React from 'react';
import Homepage from './Components/pages/Homepage';
import Contactus from './Components/pages/Contactus';
import './App.css';
import Aboutus from './Components/pages/Aboutus';
import Navbar from './Components/includes/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home.js'




function App() {
  return (
   
  <div>
    <Router>
    <div>
    <Navbar/>
 
    <Switch>
    <Route exact path="/homepage">
      <Homepage/>
      </Route>  
      <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/contactus">  
    <Contactus/>
    </Route>
    <Route path="/aboutus">
    <Aboutus/>
    </Route>
    </Switch>
    </div>   
    </Router><br/><br/><br/>
   
    </div>
    
    
  );
}

export default App;
