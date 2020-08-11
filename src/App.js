import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="mx-auto">
      <Router basename="/">
        <Route component={Home} path="/" />
      </Router>
    </div>
  );
}

export default App;
