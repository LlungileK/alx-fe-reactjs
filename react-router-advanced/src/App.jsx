import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoute";

// Stimulate user authentication status
const isAuthenticated = false;

<Route 
path="/profile/*"
element={
  <ProtectedRoute isAuthenticated={isAuthenticated}>
    <Profile />
  </ProtectedRoute>
}
/>

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
