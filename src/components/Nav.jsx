import React from "react";
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return(
            <div class="navbar-expand{-sm|-md|-lg|-xl}">
               <nav>
                  <ul class="nav-links">
                    <Link to="/">
                     <li class="link"><a>Home</a></li>
                    </Link> 
                     <Link to="/about">
                     <li class="link"><a>About Us</a></li>
                     </Link>
                     <Link to="/yoga">
                     <li class="link"><a>Yoga</a></li>
                     </Link>
                     <Link to="/pranayama">
                     <li class="link"><a>Pranayama</a></li> 
                     </Link>
                     
                     
                  </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;