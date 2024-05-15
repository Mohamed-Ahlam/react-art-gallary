import React from "react";

function Feature(){

    // paragraph
    //image

    return(
        <div className="feature">
            <div className="featureText">
                    <h2>Featured Image</h2>
                    <p>
                    <blockquote>
                        This is our featured image of the week. We allow users to come <br />together and choose  an art and the art favoured by many will<br /> be featured on our main page.
                    </blockquote>  
                    </p>
                    
                    <p>View the featured art</p>
            </div>

            <div className="featureChild">
            <img src="images/birmingham-museums-trust-GwLByeMDHOU-unsplash.jpg" alt=""  style={{width:"450px", height:"350px"}}></img>
            </div>
        </div>
    )

}

export default Feature;