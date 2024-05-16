import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Feature(props){
    const {featureArt} = props
    return(
        <div className="feature">
            <div className="featureText">
                    <h2>Featured Image</h2>
                    <p>
                    <blockquote>
                        This is our featured art section. We allow users <br />to choose the art favoured by them to be featured<br /> on our main page.
                    </blockquote>  
                    </p>
                    
                    <p>View the featured art <FontAwesomeIcon icon="fa-solid fa-arrow-right fa-xs" /></p>
            </div>

            <div className="featureChild">
            {/* <img src="images/birmingham-museums-trust-GwLByeMDHOU-unsplash.jpg" alt=""  style={{width:"450px", height:"350px"}}></img> */}
            <img src={featureArt.img} alt=""  style={{width:"450px", height:"350px"}}></img>

            </div>
        </div>
    )

}

export default Feature;