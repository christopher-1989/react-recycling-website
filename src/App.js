import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';

function App() {
  return (
    <div className="App">
      <h1>Know your Trash</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learn" component={Learn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
