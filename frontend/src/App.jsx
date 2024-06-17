import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import { LoginPage } from './Pages/LoginPage';

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<LandingPage/>}></Route>
                <Route path = '/Signup' element={<LoginPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
