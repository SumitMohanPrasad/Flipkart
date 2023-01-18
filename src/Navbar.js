import React from "react";
import  './Navbar.css';
function Navbar(props){
    return (
           <div className="navMain">
           <div className="navLeft">
             <h1 className= "logo">Flipkart</h1>
             <p>Explore Plus</p>
            
          </div>
           <div className="navRight">
             <h2 className="Login">Login</h2>
             <h2 className="Seller">Become a Seller</h2>
             <h2 className="More">More</h2>
             <h2 className="Cart">Cart</h2>
           </div>
           </div>
           

        );
}
export default Navbar;
