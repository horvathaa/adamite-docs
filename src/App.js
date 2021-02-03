import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Docs from './pages/Docs';
import './App.css';
import adamiteStone from './assets/adamite.jpg';
import Description from './pages/Description';
import SidebarDescription from './pages/SidebarDescription';

export default function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link> &nbsp; &nbsp;
      <Link to="/docs">Documentation</Link>
      </nav>
          

      
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/adamite-docs">
        <Home />
      </Route>
      <Route path="/docs">
        <Docs />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

function Home() {
return(
  <header className="App-header">
    <div className="body-description">
      <div className="img-container">
      <img src={adamiteStone} alt="Adamite stone" />
      </div>
      <b>Adamite</b> is an annotation tool designed to help developers when learning a new software framework.
    </div>
    
  </header>
)
}

function Docs() {
  return (
    <div className="Docs">
      <header className="Docs-header">
          <b>Adamite Overview</b>
          <Description />
          <SidebarDescription />
      </header>
    </div>
  );
}
