import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Accordion from './Accordion';


function Yoga() {
    
    return(
    <div>
    <div className="grid-container">
        <Header />
        <Nav />
        <main className="main">
            <div className="container">
        <h2>LEARN ABOUT YOGA</h2>
    <p class="text-danger"><a href="#" data-toggle="tooltip" title="In this section you learn about yoga!!">Yoga for beginners</a></p>
    <p>Deepen your understanding of yoga by exploring the philosophical aspects of this ancient practice. Learn about the history of yoga, get an overview of the major yogic texts,
    and learn more about the chakras, the body’s energy centers and their relationship to health and wellness. We’ve also included a section on using asanas to treat common ailments
    and conditions as well as a compressive list of our articles on yoga.</p>
   <Accordion />
   
        </div>
    </main>
    </div>
    <Footer />
    </div>
              
          
       
    )
}

export default Yoga;