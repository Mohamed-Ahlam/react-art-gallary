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
    {"id": 1,"img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1513px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", "title":"Starry Night", "artist":"Vincent Van Gogh"},
    {"id": 2,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/45455/the-kiss-reproduction-klimt.webp", "title":"The Kiss", "artist":"Gustav Klimt"},
    {"id": 3,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/102975/girl-with-a-pearl-earring-c-16.webp", "title":"Girl with a Pearl Earring c. 1665", "artist":" Jan Vermeer Van Delft"},
    {"id": 4,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/168087/cafe-terrace-on-the-place-du-f.webp", "title":"Cafe Terrace on the Place du Forum", "artist":"Vincent Van Gogh"},
    {"id": 5,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/112457/christ-in-the-storm-on-the-sea.webp", "title":"Christ In The Storm On The Sea Of Galilee", "artist":"Rembrandt van Rijn"}
  ]
  
  const listTwo = [
    {"id": 6,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/79070/luncheon-of-the-boating-party-.webp", "title":"Luncheon Of The Boating Party", "artist":"Pierre Auguste Renoir"},
    {"id": 7,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/b/a/base_6796027.webp", "title":"The Last Supper 1498", "artist":"Leonardo Da Vinci"},
    {"id": 8,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/139966/boreas-1903-reproduction-water.webp", "title":"Boreas 1903", "artist":"John William Waterhouse"},
    {"id": 9,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/45790/starry-night-over-the-rhone-re.webp", "title":"Starry Night Over The Rhone", "artist":"Vincent Van Gogh"},
    {"id": 10,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/81897/mona-lisa-la-gioconda-c-1503-0.webp", "title":"Mona Lisa", "artist":"Leonardo Da Vinci"},
    // {"id": 7,"img":"images/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg", "title":"Title", "artist":"name"}
  ]
  
  const listThree = [
    {"id": 11,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/80919/irises-in-monets-garden-reprod.webp", "title":"Irises In Monets Garden", "artist":"Claude Monet"},
    {"id": 12,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/68106/the-return-of-the-prodigal-son.webp", "title":"The Return of the Prodigal Son c. 1669", "artist":"Rembrandt Van Rijn"},
    {"id": 13,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/100611/the-school-of-athens-from-the-.webp", "title":"The School of Athens", "artist":"Raphael"},
    {"id": 14,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/79574/two-sisters-aka-on-the-terrace.webp", "title":"Two Sisters Aka On The Terrace", "artist":"Pierre Auguste Renoir"},
    {"id": 15,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/81119/san-giorgio-maggiore-at-dusk-r.webp", "title":"San Giorgio Maggiore At Dusk", "artist":"Claude Monet"},
    // {"id": 6,"img":"images/birmingham-museums-trust-MgZirQdpV4Q-unsplash.jpg", "title":"Title", "artist":"name"},
  ]
  
  const listFour = [
    {"id": 16,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/45074/irises-reproduction-van-gogh.webp", "title":"Irises", "artist":"Vincent Van Gogh"},
    {"id": 17,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/168142/branches-with-almond-blossom-r.webp", "title":"Branches with Almond Blossom", "artist":"Vincent Van Gogh"},
    {"id": 18,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/81443/the-walk-woman-with-a-parasol-.webp", "title":"The Walk Woman With A Parasol", "artist":"Claude Monet"},
    {"id": 19,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/78830/dance-at-the-moulin-de-la-gale.webp", "title":"Dance At The Moulin De La Galette", "artist":"Pierre Auguste Renoir"},
    {"id": 20,"img":"https://www.1st-art-gallery.com/media/catalog/product/cache/9bad95616889b8b60a4bb85fbf2f33f9/paintingsL/45819/vase-with-twelve-sunflowers-ii.webp", "title":"Vase With Twelve Sunflowers II", "artist":"Vincent Van Gogh"}
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
            <Route path="/artpage/:artworkId" element={<ArtPage listOne={listOne} listTwo={listTwo} listThree={listThree} listFour={listFour}/>}/>
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