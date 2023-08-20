import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Vehicles from './Components/Pages/Vehicles';
import Energy from './Components/Pages/Energy';
import Charging from './Components/Pages/Charging';
import Shop from './Components/Pages/Shop';
import Tesla from './Components/Pages/Tesla';
import Home from './Components/Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
          <Route path="/" element={<Tesla />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/charging" element={<Charging />} />
          <Route path="/shop" element={<Shop />}/>

       </Routes>
    </div>
  );
}

export default App;
