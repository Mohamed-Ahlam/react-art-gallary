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
        <div className="imgContainer"  key={item.id}>
            <img src={item.img} alt="" className="image" style={{width:"100%"}}></img>
            <div class="overlay">
                <div class="title">{item.title}</div>
                <div class="artist">{item.artist}</div>

                 
                <div class="makeFeature"><a onClick={() => {addFeatureArt(item)}}>To Make Feature <FontAwesomeIcon icon="fa-solid fa-heart fa-xs" /></a></div>
        
                <Link to={`/artpage/${item.id}`}> 
                <div class="viewArt"><a>To view art info <FontAwesomeIcon icon="fa-solid fa-arrow-right fa-xs" /></a></div>
                </Link>


            </div>
        </div>
    )
}

export default Image;