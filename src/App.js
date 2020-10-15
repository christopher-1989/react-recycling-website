import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Casey from './components/pages/Casey';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';
import offsite from './components/pages/offsite';
import Port from './components/pages/Port'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/port-phillip" component={Port} />
          <Route path="/casey" component={Casey} />
          <Route path="/offsite" component={offsite} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
