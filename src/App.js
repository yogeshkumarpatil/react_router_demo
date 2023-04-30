
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const navigate = useNavigate();

  //he single route la call karnyasathi
  // const NavigateTOAbout = () =>{
  //   navigate('/about');
  // }


  //he multiple route la call karnyasathi
  // const NavigateTo = (url) =>{
  //   navigate(url);
  // }



  const NavigateToWhere = () =>{
    let name = 'Yogessh';
    if(name === 'Yogesh')
    {
      navigate('/about');
    }
    else{
      navigate('contact')
    }
  }



  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home />}  />
      <Route path='/about' element={ <About />}  />
      <Route path='/contact' element={ <Contact />}  />
    </Routes>

    {/* <button onClick={ () => NavigateTOAbout()}>About 1 </button> */}



    {/* on button click navigation */}
    {/* <button onClick={ () => navigate('/about')}>About 2</button>     */}
    {/* <button onClick={ () => navigate('/contact')}>Contact</button> */}



    {/* on event handler navigation */}
    {/* <button onClick={ () => NavigateTo('/about')}>About 2</button>
    <button onClick={ () => NavigateTo('/contact')}>Contact</button> */}


    {/* on condition based navigation */}
    <button onClick={ () => NavigateToWhere()}>Click Me</button>

    <button onClick={ () => navigate(-1)}>Go Back</button>

    </>
  );
}

export default App;
