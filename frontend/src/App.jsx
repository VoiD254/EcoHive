import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LandingPage } from './Pages/LandingPage';
import {Dashboard} from './Pages/Dashboard';

function App() {

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<LandingPage/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
