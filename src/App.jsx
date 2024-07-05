
import './App.css'
import NavBar from './components/NavBar.jsx';
import HomePage from './pages/Home.jsx';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import ContactForm from './pages/ContactForm.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndCondition from './pages/TermsAndCondition.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Define paths where NavBar and Footer should be hidden
  const hideHeaderFooterPaths = ['/privacyPolicy', '/terms'];

  // Function to check if current path should hide NavBar and Footer
  const shouldHideHeaderFooter = () => {
    return hideHeaderFooterPaths.includes(location.pathname);
  };

  return (
    <>
      {!shouldHideHeaderFooter() && <NavBar />}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsAndCondition />} />
      </Routes>

      {!shouldHideHeaderFooter() && <Footer />}
    </>
  );
};

export default App;
