import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Yoga from './components/Yoga';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';


function App() {
  return (
    <Router>
    <div className="grid-container">
      <Nav />
      <Switch>
       <Route path="/" exact  component={Home}/>
       <Route path="/about"  component={About}/>
       <Route path="/yoga"  component={Yoga}/>
       </Switch>
    </div>
    </Router>

  );
}


const Home = () => (
  <div>
    <h1>My  beautiful home page</h1>
  </div>
)
export default App;

