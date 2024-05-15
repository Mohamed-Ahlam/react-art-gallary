import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Image(props){

    const {item} = props

    return(
        <div className="imgContainer">
            <img src={item.img} alt="" className="image" style={{width:"100%"}}></img>
            <div class="overlay">
                <div class="title">{item.title}</div>
                <div class="artist">{item.artist}</div>
                <div class="text"><a><b>To view art info </b> <FontAwesomeIcon icon="fa-solid fa-arrow-right fa-xs" /></a></div>
            </div>
        </div>
    )
}

export default Image;