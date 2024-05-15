import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import Feature from './components/Feature';


function App() {
  return (
    <div >
     
     
        <div className="heroPage">
          <Header/>
        </div>

        <div className="featurePage">
          <Feature/>
        </div>

        
        
        <Main/>

    </div>
  );
}

export default App;
