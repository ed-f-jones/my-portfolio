import React, {Fragment} from 'react';
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Contact from './components/Contact';
import AOS from'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
    AOS.init()
  return (
    <>
    <Router>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
