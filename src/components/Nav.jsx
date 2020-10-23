import React from "react";

class Nav extends React.Component {
    render() {
        return(
            <div class="nav-bar navbar-expand">
               <nav>
                  <ul class="nav-links">
                     <li class="link"><a href="index.html">Home</a></li>
                     <li class="link"><a href="about.html">About Us</a></li>
                     <li class="link"><a href="yoga.html">Yoga</a></li>
                     <li class="link"><a href="pranayama.html">Pranayama</a></li>
                  </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;