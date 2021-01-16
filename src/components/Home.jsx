import React from 'react';
import Header from './Header';
import City from './City';
import Sidebar from './Sidebar';
import Footer from './Footer';


class Home extends React.Component {
    render() {
        return(
 <div className="grid-container">
   <Header /> 
   <div class="content">
   <Sidebar />
  
   <div className="card-container">
        <City />
        <City />
        <City />
      </div>
 </div>
 <Footer />
 </div>
    )
    }
}

export default Home;