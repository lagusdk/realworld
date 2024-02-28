import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';;
import Home from './routes/Home';
import Login from './routes/login';
import Signup from './routes/signup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
