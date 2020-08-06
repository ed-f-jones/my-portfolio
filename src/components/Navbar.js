import React from 'react'

 function Navbar() {
    return (
    <div className="navbar hidden" id="navbar">
        <nav className="nav">
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="about">about</a></li>
                <li><a href="portfolio">portfolio</a></li>
                <li><a href="contact"> contact</a></li>
            </ul>
        </nav>
    </div>
    )
}
export default Navbar;