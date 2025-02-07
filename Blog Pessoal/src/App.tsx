import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
        <Navbar />
        <Home />
        <Footer />
    </>
  );
}

export default App;