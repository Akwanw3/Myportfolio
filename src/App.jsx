import { ThemeProvider } from '@/context/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/component/common/Nav';
import Footer from '@/component/common/Footer';
import Home from './page/Home';
import '@/App.css';
import AboutPage from './page/About';
import ServicesPage from './page/Services';
import ContactPage from './page/Contact';
import DevelopmentPortfolio from './page/DevPage';



function App() {
  return (
    <>
    
    <ThemeProvider>
      <Router>
      <Navbar/>
      <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<AboutPage/>}/>
    <Route path='/Services' element={<ServicesPage/>}/>
    <Route path='/Contact' element={<ContactPage/>}/>
    <Route path='/DevPage' element={<DevelopmentPortfolio/>}/>
      </Routes>
         <Footer/>
     </Router>
    </ThemeProvider>
    
    </>
  );
}

export default App;
