import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ItemPage from './pages/ItemPage'; // Corrected casing

function App() {
  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Homepage />} />
        <Route path= "/items" element={<Itempage/>} />
      </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
