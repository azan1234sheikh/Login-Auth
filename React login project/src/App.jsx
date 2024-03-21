// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Register from './Register.jsx';
import Login from './login';
import Dashboard from './Dashboard.jsx';
// import {success} from './Dashboard.jsx';
function App({ success = false}) {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/Dashboard" element={<Dashboard success={success.toString()} />} />
    </Routes>
  );
}

export default App;
