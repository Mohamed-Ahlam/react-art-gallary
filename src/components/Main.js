import React from "react";
import Image from "./Image";

function Main(props){

    const{listOne, listTwo, listThree, listFour} = props;

    return (
    <div className="main">
        <div className="mainHeader">
            <h1>The Art Gallary</h1>
        </div>
         
         
        <div className="row"> 
        <div className="column">
        {listOne.map((item) => <Image item={item}/>)}
        </div>
        <div className="column">
        {listTwo.map((item) => <Image item={item}/>)}
        </div>
        <div className="column">
        {listThree.map((item) => <Image item={item}/>)}
        </div>
        <div className="column">
        {listFour.map((item) => <Image item={item}/>)}
        </div>
        </div>

        {/* m */}
    </div>
    )
}

export default Main;