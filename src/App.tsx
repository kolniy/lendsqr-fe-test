import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.scss';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return <>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/users" element={<Dashboard />} />
        </Routes>
    </Router>
  </>
}

export default App;
