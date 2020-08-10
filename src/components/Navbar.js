import React from 'react';
import {Link, Router} from 'react-router-dom';

 function Navbar() {
    function toggleNavbar (e) {
        const navbar = document.getElementById('navbar');
        const closeBtn = document.getElementById('closeBtn');

        closeBtn.addEventListener('click', ()=> {
            navbar.classList.add('hidden');
        });
    }

    return (
    <div className="navbar" id="navbar">

        <div className="close-btn-container" id="closeBtn">
            <i className="fas fa-times" onClick={toggleNavbar} id="close-btn"></i>
        </div>

        <nav className="nav">
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/portfolio">portfolio</Link></li>
                <li><Link to="/contact"> contact</Link></li>
            </ul>
        </nav>
    </div>
    )
}
export default Navbar;