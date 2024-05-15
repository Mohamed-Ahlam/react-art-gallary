import React from "react";
import {Link} from 'react-router-dom';


function NavBar(){

    const navStyle = {
        color: 'white'
    }

    return (
    <>
        <nav>
        <ul >
            <Link to="/" style={navStyle}>
                <li>Home</li>
            </Link>
            <Link to="/" style={navStyle}>
                <li>News</li>
            </Link>
            <Link to="/" style={navStyle}>
                <li>Contact</li>
            </Link>
            <Link to="/" style={{float:"right", color: "white"}}>
                <li>About</li>
            </Link>
        </ul>
        </nav>
    </>
    )
}

export default NavBar;