import React from 'react';
import '../App.css';
import Img3 from '../img/img-3.jpg';


 function About() {
    return (
        <section className="section-about" id="about">
            <div data-aos="fade-in" data-aos-duration="2000">
            <img className="profile-pic" src={Img3}/>
            </div>
            <div data-aos="fade-in" data-aos-duration="2500">
                <h1>About me</h1>
                <p>
                I'm baby live-edge small batch lomo schlitz palo santo enamel pin craft beer 
                cred tumeric subway tile freegan. Listicle cred cloud bread tilde bespoke VHS 
                readymade aesthetic. Artisan bicycle rights freegan gastropub flannel chicharrones 
                coloring book XOXO celiac before they sold out marfa PBR&B heirloom cred bitters. 
                Readymade twee organic lo-fi. Squid scenester photo booth, crucifix messenger bag
                 gastropub forage asymmetrical fingerstache. Small batch bicycle rights selfies, 
                 messenger bag four loko coloring book glossier raw denim artisan master cleanse 
                 church-key crucifix.
                </p>
                <p>
                Butcher ugh palo santo, swag salvia next level pour-over everyday carry. Organic
                 vexillologist pitchfork 8-bit keytar farm-to-table chillwave leggings yr cardigan 
                 drinking vinegar. Quinoa poke mumblecore four dollar toast pinterest. Locavore 
                 coloring book pok pok put a bird on it sartorial chambray helvetica. Hell of 
                 kickstarter vexillologist vice fixie salvia banh mi XOXO mustache tofu. Roof 
                 party 3 wolf moon plaid mixtape wolf, yr offal la croix. Polaroid pug narwhal 
                 williamsburg chartreuse.
                </p>
            </div>
        </section>
    )
}
export default About;