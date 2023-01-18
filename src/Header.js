import React from "react";
import  './Header.css';
function Header(props){
    return (
           <div className="navmain">
          
           <h1>{props.text}</h1>
           <img src={props.img}/>
           </div>
           

        );
}
export default Header;
