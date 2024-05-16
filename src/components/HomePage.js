import React from "react";


import Header from "./Header"
import Main from './Main';
import Feature from './Feature';

function HomePage(props){

    const{listOne, listTwo, listThree, listFour, addFeatureArt, featureArt} = props;

    return(
        <>
        <div className="heroPage">
          <Header/>
        </div>

        <div className="featurePage">
          <Feature featureArt={featureArt}/>
        </div>

        <div >
          <Main listOne={listOne} listTwo={listTwo} listThree={listThree} listFour={listFour} addFeatureArt={addFeatureArt}/>
        </div>
        </>
    )
}

export default HomePage;