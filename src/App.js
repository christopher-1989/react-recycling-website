import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/pages/Blog';
import Casey from './components/pages/Casey';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';
import Offsite from './components/pages/Offsite';
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
          <Route path="/offsite" component={Offsite} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
