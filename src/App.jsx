import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { Tree } from './Pages/Tree';
import { Agri } from './Pages/Agri';
import { Air } from './Pages/Air';
import { Mangrove } from './Pages/Mangrove';
import { Water } from './Pages/Water';
import { UserOrOrg } from './Pages/UserOrOrg';
import SignupLoginIndividual from './Components/Signup-Individual';
import SignupLoginOrg from './Components/Signup-Org';
import { Dashboard } from './Pages/Dashboard';

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<LandingPage/>}></Route>
                <Route path='/org/dashboard' element={<Dashboard entity={"org"}/>}></Route>
                <Route path='/Tree' element={<Tree/>}></Route>
                <Route path='/Water' element={<Water/>}></Route>
                <Route path='/Agri' element={<Agri/>}></Route>
                <Route path='/Air' element={<Air/>}></Route>
                <Route path='/Mangrove' element={<Mangrove/>}></Route>     
                <Route path='/userOrOrg' element={<UserOrOrg/>}></Route>    
                <Route path='/individual' element={<SignupLoginIndividual/>} ></Route>
                <Route path='/org' element={<SignupLoginOrg/>} ></Route>
                <Route path='/individual/dashboard' element={<Dashboard entity={"individual"}/>} ></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App