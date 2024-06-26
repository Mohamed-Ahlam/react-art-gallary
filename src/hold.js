*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  /* u NEED ALL 3  */
  }
  
  /* sets up the page is 100vh */
  
  
  .heroPage{
    width: 100%;
    height: 100vh;  /* targets 100% of ANY screen ur looking at */
  
    border: 2px solid red;
    background-image: url("https://media.timeout.com/images/105963997/image.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(5px);
  }
  
  /* is the flexbox item */
  .hero{
    /* min-height: 50%; sets the minimum height of an element */
    /* min-height: 100%;
    min-width: 100%;   */
    /* use 100% width and height so flex box can take over the whole page */
    display: flex;
    row-gap: 10em;  /* u need this to give spacing to flex items WHEN THEY ARE IN "flex-direction:column"*/
    flex-direction: column;
  
    justify-content: center;
    align-items: center;
  }
  
  .child:nth-child(1){
    /* flex: 1 1 auto; */
  }
  
  .child:nth-child(2){
    /* flex: 1 1 auto;   do this so this flex item can take up page space */
  
  }
  
                            /* hero text - a flex item of hero */
  .heroText{
    border: 2px solid pink;
  
    display: flex;
    /* text-align: center; */
    flex-direction: column;
    justify-content: end;
    align-items: center;
  
  
    font-weight: bold;
    font-size:20px;
    /* transparent text bg */
    background: rgb(0, 0, 0); /* Fallback color */
    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
    color: #f1f1f1;
    width: 50%;
    padding: 20px;
    /* height: 30px; */
  
  }
  
  
  
                            /* nav bar - a flex item of hero */
  
  /* .navBar{
    align-self: start;
    justify-items: start;
    gap: 50%;
  } */
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: rgb(0, 0, 0); /* Fallback color */
    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
    
  }
  
  li {
    /* float: left; */
    /* width: 100%;
    height: 100%; */
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  
  
      /* transparent text bg */
  /*    
      padding: 20px; */
  }
  
  li a:hover:not(.active) {
    background-color: #111;
  }
  
  /* .active {
    background-color: #04AA6D;
  } */
  
  
                                       /* feature section */
  
  .featurePage{
    height: 60vh;
    border:2px solid rgb(84, 84, 84);
    
    background-color: rgb(253, 243, 232);
  }
  .feature{
    /* 100% is about taking 100% height of what the parent size was */
    min-height: 100%;
    display: flex;
  
    justify-content: center;
    align-items: center;
    gap: 10em;
  
  
    color:2px solid rgb(84, 84, 84);
  }
  
  .featureText{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color:rgb(112, 4, 4);
    font-size: larger;
    font-weight:600;
    /* justify-content: space-between;
    align-items: end; */
  }
  
  .feature img{
    border:6px solid rgb(112, 4, 4);
  }
  
                                       /* main bar */
  .main{
    /* width: 100%; */
    height: 100vh;
    overflow: scroll;
  
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: bisque;
  }
  
  
  /* trying to make main header stretch the whole page - FAILED */
  /* .mainHeader{
    flex-grow: 1;
    flex-basis: auto;
    border: 2px solid blue;
  } */
  
  .main h1{
    /* padding: 20px; */
    margin: 20px;
    border-bottom: solid;
    color: rgb(112, 4, 4);
    font-size: 35px;
   
    /* width: 100%; */
    /* align-self: flex-start;
    align-content: start; */
  }
  
  /* pain */
  
  
  /* 
  .column {
    float: right;
    width: 20%;
    padding: 10px;
  }
  
  .column img {
    margin-top: 12px;
  }
  
  .row:after {
    content: "";
    display: table;
    clear: both;
  } */
  
  /* Create two equal columns that stands next to each other */
  .column {
    /* float: right; */
    width: 25%;
    padding: 15px;
  
    /* position: relative;
    margin-left:30px; */
  }
  
  .column img {
    margin-top: 12px;
  }
  
  .row{
    
    /* content: "";
    display: table;
    clear: both; */
  
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 50px;
    
    /* justify-content: space-around;
    align-items: center; */
  }
  
  /* TRYING IT OUT */
  
  
  .imgContainer {
    /* position: relative; */
    width: 50%;
    /* bottom: 0; */
  }
  
  .image {
    /* display: block; */
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgb(112, 4, 4);
  }
  
  .imgContainer:hover .overlay {
    opacity: 1;
  }
  
  .title {
    color: white;
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .artist {
    color: white;
    font-size: 100%;
    position: absolute;
    top: 60%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .text {
    color: white;
    font-size: 100%;
    position: absolute;
    top: 80%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  
  /* trying */
  
  