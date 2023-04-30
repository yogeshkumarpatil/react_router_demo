
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home />}  />
      <Route path='/about' element={ <About />}  />
      <Route path='/contact' element={ <Contact />}  />
    </Routes>
  );
}

export default App;
