import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { Dashboard } from './Pages/Dashboard';
import { Tree } from './Pages/Tree';
import { Agri } from './Pages/Agri';
import { Air } from './Pages/Air';
import { Mangrove } from './Pages/Mangrove';
import { Water } from './Pages/Water';

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<LandingPage/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/Tree' element={<Tree/>}></Route>
                <Route path='/Water' element={<Water/>}></Route>
                <Route path='/Agri' element={<Agri/>}></Route>
                <Route path='/Air' element={<Air/>}></Route>
                <Route path='/Mangrove' element={<Mangrove/>}></Route>         
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
