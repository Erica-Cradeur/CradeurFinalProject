import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Adopt from './components/pages/Adopt';
import AboutNHS from './components/pages/AboutNHS';
import WaystoGive from './components/pages/WaystoGive';
import Donate from './components/pages/Donate';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/adopt' element={<Adopt />} />
          <Route path='/AboutNHS' element={<AboutNHS />} />
          <Route path='/WaystoGive' element={<WaystoGive />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
