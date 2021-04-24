import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Sidebar from './Sidebar';
import City from './City';
import Footer from './Footer';

class Home extends React.Component {
   render() {
       return(
        <div className="container-fluid">
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
}
export default Home;