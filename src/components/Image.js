import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

// import { useParams } from 'react-router-dom';
// import {listOne, listTwo, listThree, listFour} from '../data';

// CHANGE IMAGE NAME to ART 


function Image(props){

    // const {item, showArt} = props
    const {item, addFeatureArt} = props

    // const { artworkId } = useParams();
    // const art = listOne.find(a => a.id === parseInt(artworkId));
  

    return(
        <div className="imgContainer">
            <img src={item.img} alt="" className="image" style={{width:"100%"}}></img>
            <div class="overlay">
                <div class="title">{item.title}</div>
                <div class="artist">{item.artist}</div>

                <Link to='/artpage'> 
                {/* <div class="text"><a onClick={() => {showArt(item)}}>To view art info <FontAwesomeIcon icon="fa-solid fa-arrow-right fa-xs" /></a></div> */}
                <div class="text"><a onClick={() => {addFeatureArt(item)}}>To view art info <FontAwesomeIcon icon="fa-solid fa-arrow-right fa-xs" /></a></div>
                </Link>


            </div>
        </div>
    )
}

export default Image;