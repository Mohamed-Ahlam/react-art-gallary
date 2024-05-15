import React from "react";

import Header from "./Header"
import Main from './Main';
import Feature from './Feature';

function HomePage(props){

    const{listOne, listTwo, listThree, listFour} = props;

    return(
        <>
        <div className="heroPage">
          <Header/>
        </div>

        <div className="featurePage">
          <Feature/>
        </div>

        <div >
          <Main listOne={listOne} listTwo={listTwo} listThree={listThree} listFour={listFour}/>
        </div>
        </>
    )
}

export default HomePage;