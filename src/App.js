import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Yoga from './components/Yoga';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';


function App() {
  return (
    <Router>
    <div className="grid-container">
      
      <Switch>
       <Route path="/" exact  component={Home}/>
       <Route path="/about"  component={About}/>
       <Route path="/yoga"  component={Yoga}/>
       </Switch>
    </div>
    </Router>

  );
}



export default App;

