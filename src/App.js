import React from 'react';
import './App.css';
import Home from "./pages/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">

            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home page(Where you will do serching) */}
            <Home />
          </Route>
        </Switch>
      </Router>


      {/* Result page */}

    </div>
  );
}

export default App;
