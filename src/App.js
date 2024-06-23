import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import Allmovie from './components/Allmovie';
import SignUp from './components/Sign up'; 
import LogIn from './components/Log in'; 
import './App.css'; 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/allmovie" element={<Allmovie />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp  />} />
        <Route path="/login" element={<LogIn />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
