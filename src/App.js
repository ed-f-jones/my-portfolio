import React, {Fragment} from 'react';
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Contact from './components/Contact';
import AOS from'aos';
import 'aos/dist/aos.css';

function App() {
    AOS.init()
  return (
    <>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
