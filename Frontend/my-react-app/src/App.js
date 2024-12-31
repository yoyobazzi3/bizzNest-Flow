import './App.css';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import NewProject from './components/NewProject/NewProject';
import Recommendations from './pages/recommendations';
import Interns from './pages/Interns';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/Authentication/authentication';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    /*<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/interns" element={<Interns />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>*/
    <Router>
  <Routes>
    {/* Public Route */}
    <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
    
    {/* Protected Routes */}
    <Route
      path="/"
      element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <HomePage />
        </PrivateRoute>
      }
    />
    <Route
      path="/new-project"
      element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <NewProject />
        </PrivateRoute>
      }
    />
    <Route
      path="/recommendations"
      element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Recommendations />
        </PrivateRoute>
      }
    />
    <Route
      path="/interns"
      element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Interns />
        </PrivateRoute>
      }
    />
  </Routes>
</Router>

  );
}

export default App;
