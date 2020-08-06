import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

 function Hero() {
     // needs to have a nav button

     // link all sections together with smooth scrolling
    return (
        <header className="hero" id="home">
            <Navbar/>
            <div className="hero-title">
                <h1  data-aos="fade-left" data-aos-duration="1500">Edward F. Jones</h1>
                <h2 data-aos="fade-right" data-aos-duration="2500" >Web Developer</h2>
            </div>
        </header>
    )
}

export default Hero;