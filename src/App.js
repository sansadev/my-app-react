import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import City from './components/City';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Nav />

      <div className="content">
        <Sidebar />
        <main className="main">
          <div className="card-container">
            <City />
            <City />
            <City />
          </div>
        </main>
      </div>
      <Footer />

    </div>


  )
}

export default App;

