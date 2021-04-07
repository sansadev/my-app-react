import React from "react";
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return(
            <div class="nav-bar navbar-expand">
               <nav>
                  <ul class="nav-links">
                    <Link to="/">
                     <li class="link"><a href="#">Home</a></li>
                    </Link> 
                     <Link to="/about">
                     <li class="link"><a href="#">About Us</a></li>
                     </Link>
                     <Link to="/yoga">
                     <li class="link"><a href="#">Yoga</a></li>
                     </Link>
                     <Link to="/pranayama">
                     <li class="link"><a href="#">Pranayama</a></li> 
                     </Link>
                     
                     
                  </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;