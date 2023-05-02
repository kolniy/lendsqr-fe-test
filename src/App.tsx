import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.scss';

import Login from './components/Login/Login';
import Task from './components/Task';

function App() {

  return <>
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create" element={<Task />} />
        </Routes>
    </Router>
  </>
}

export default App;
