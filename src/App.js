import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import PDF from './components/Map.jsx'

import Homepage from './pages/homepage.jsx'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Route path="/" exact component={Homepage}/>
      <Route path="/Map" exact component={PDF}/>
                    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
