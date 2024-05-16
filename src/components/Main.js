import React from "react";
import Image from "./Image";

function Main(props){

    // const{listOne, listTwo, listThree, listFour, showArt} = props;
    const{listOne, listTwo, listThree, listFour, addFeatureArt} = props;

    return (
    <div className="main">
        <div className="mainHeader">
            <h1>The Art Gallary</h1>
        </div>
         
         
        <div className="row"> 
        <div className="column">
        {/* {listOne.map((item) => <Image item={item} />)} */}
        {listOne.map((item) => <Image item={item} addFeatureArt={addFeatureArt}/>)}

        </div>
        <div className="column">
        {listTwo.map((item) => <Image item={item} addFeatureArt={addFeatureArt}/>)}
        </div>
        <div className="column">
        {listThree.map((item) => <Image item={item} addFeatureArt={addFeatureArt}/>)}
        </div>
        <div className="column">
        {listFour.map((item) => <Image item={item} addFeatureArt={addFeatureArt}/>)}
        </div>
        </div>

        {/* m */}
    </div>
    )
}

export default Main;