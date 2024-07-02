
import './App.css'
import NavBar from './components/NavBar.jsx';
import HomePage from './pages/Home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactForm from './pages/ContactForm.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element ={<HomePage />}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
      </>
  )
}

export default App
