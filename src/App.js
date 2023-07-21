import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import SecondaryComponent from './components/SecondaryComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={HomeComponent} />
        <Route path='/secondary' Component={SecondaryComponent} />
      </Routes>
    </Router>
  );
}

export default App;
