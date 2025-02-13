import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch, Redirect } from "react-router-dom";
import { AppProvider } from './components/context/AppContext';
import { AdminProvider } from './components/context/AdminContext';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import JobPostings from './components/pages/JobPostings';
import Header from './components/HeaderComponent';

const App = () => {
  return (
    <Router>
        <AppProvider>
          <AdminProvider>
            <div className="App">
              <Header/>
              <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact path = "/events" element={<Events />} />
                <Route exact path = "/jobpostings" element={<JobPostings />} />
              </Routes> 
            </div>
          </AdminProvider>
        </AppProvider>
    </Router>
  );
}

export default App;

// "start": "react-scripts start",