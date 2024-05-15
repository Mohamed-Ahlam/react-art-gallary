import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';




function Image(props){

    const {item} = props

    return(
        <div className="imgContainer">
            <img src={item.img} alt="" className="image" style={{width:"100%"}}></img>
            <div class="overlay">
                <div class="title">{item.title}</div>
                <div class="artist">{item.artist}</div>
                <Link to='/artpage'> 
                <div class="text"><a><b>To view art info </b> <FontAwesomeIcon icon="fa-solid fa-arrow-right fa-xs" /></a></div>
                </Link>
            </div>
        </div>
    )
}

export default Image;