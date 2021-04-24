import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

function About() {
    return(
        <div className="grid-container container-fluid">
          <Header />
          <Nav />
          <main className="main">
            <div className="container">
              <h1 className="glow">Nature</h1>
              <img className="img-fluid waterfall img-thumbnail"  src="image/waterfall.jpg" alt="waterfall" /> 
            </div>
          </main>
           <Footer />
        </div>
    )
}

export default About;