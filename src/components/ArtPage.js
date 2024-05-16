import React from "react";
import { useParams } from 'react-router-dom';
import {useState} from "react"; 




function ArtPage(props){

    const {listOne , listTwo, listThree, listFour} = props;

    const { artworkId } = useParams(); // gets the number at the end url (which was the id of the item that i put in)
    let art = null;
// look thro each list to find the obj using url id
    if ((listOne.find(a => a.id === parseInt(artworkId)))) {
        art = listOne.find(a => a.id === parseInt(artworkId))
      }
    else if ((listTwo.find(a => a.id === parseInt(artworkId)))) {
        art = listTwo.find(a => a.id === parseInt(artworkId))
    }
    else if ((listThree.find(a => a.id === parseInt(artworkId)))) {
        art = listThree.find(a => a.id === parseInt(artworkId))
    }
    else if ((listFour.find(a => a.id === parseInt(artworkId)))) {
        art = listFour.find(a => a.id === parseInt(artworkId))
    }
    else{
        return <div>Artwork not found!</div>;
    }
    
        // 
    return(
        <div className="artpage">
            <div className="artText">
                    <h2>{art.title}</h2>
                    <p>{art.artist}</p>
            </div>

            <div className="artImg">
                <img src={art.img} alt=""  style={{width:"550px", height:"450px"}}></img>
            </div>

        </div>
    )
}

export default ArtPage;