import './App.css';
import {useState} from "react"; 


import ArtPage from './components/ArtPage'

import HomePage from './components/HomePage';


// import the icon library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import router
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  const listOne = [
    {"id": 1,"img":"images/tamara-menzi-n-vnWQmmVoY-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 2,"img":"images/steve-johnson-GLbm1W_Hk8Q-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 3,"img":"images/steve-johnson-8JURfedRyWg-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 4,"img":"images/europeana-ryiQ0NISRJ4-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 5,"img":"images/vojtech-bruzek-zMl9PjGFPWg-unsplash.jpg", "title":"Title", "artist":"name"}
  ]

  const listTwo = [
    {"id": 1,"img":"images/europeana-88w2yI5A78Y-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 3,"img":"images/europeana-3QmNmsF8e6s-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 4,"img":"images/birmingham-museums-trust-XIF7jSA5I4c-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 5,"img":"images/birmingham-museums-trust-wKlHsooRVbg-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 6,"img":"images/birmingham-museums-trust-SAQl58G-RYs-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 7,"img":"images/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg", "title":"Title", "artist":"name"}
  ]

  const listThree = [
    {"id": 1,"img":"images/birmingham-museums-trust-GwLByeMDHOU-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 2,"img":"images/birmingham-museums-trust-JZdPBgU6Nik-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 3,"img":"images/birmingham-museums-trust-KAV4fodMAIA-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 4,"img":"images/pexels-anastas-7419327.jpg", "title":"Title", "artist":"name"},
    {"id": 5,"img":"images/birmingham-museums-trust-M_eaAvqkibg-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 6,"img":"images/birmingham-museums-trust-MgZirQdpV4Q-unsplash.jpg", "title":"Title", "artist":"name"},
  ]

  const listFour = [
    {"id": 1,"img":"images/europeana-VsnDYMWollM-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 2,"img":"images/usgs-Eu2uXqoHenE-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 3,"img":"images/birmingham-museums-trust-Dux4iugPayo-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 4,"img":"images/simon-champagne-9nXws2I_kgo-unsplash.jpg", "title":"Title", "artist":"name"},
    {"id": 5,"img":"images/pexels-steve-1145720.jpg", "title":"Title", "artist":"name"}
  ]



    // function showArt(item){
    //   <ArtPage item={} />
    //   return item;
    // }


    const [featureArt, setFeatureArt] = useState({"id": 5,"img":"images/pexels-steve-1145720.jpg", "title":"Title", "artist":"name"})

    const addFeatureArt = (art) => {
      const hold = {"id":art.id, "img":art.img, "title":art.title, "artist":art.artist};
      setFeatureArt(hold);
    }

  return (
    <Router>
    <div >

        <Routes>
          {/* <Switch> */}
            <Route path='/' exact element={<HomePage listOne={listOne} listTwo={listTwo} listThree={listThree} listFour={listFour} addFeatureArt={addFeatureArt} featureArt={featureArt}/>}/>
            <Route path='/artpage' element={<ArtPage/>}/>
            {/* <Route path="/artwork/:artworkId" element={<ArtPage />}/> */}

          {/* </Switch> */}
          
        </Routes>


    </div>
    </Router>
  );
}

export default App;
library.add(fab, fas, far)


/*
updating the featured artwork display.

click on a btn and tha btn changs state


to click on image and itll take u to art 

app
homepage
menu
image

*/