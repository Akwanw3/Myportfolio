import { ThemeProvider } from '@/context/ThemeContext';
import { BrowserRouter as Router, Route, Routes,Navigate,useLocation } from 'react-router-dom';
import '@/App.css';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './context/PageTransition';
import Navbar from '@/component/common/Nav';
import Footer from '@/component/common/Footer';
import ScrollToTop from './context/ScrollToTop';
// Pages
import Home from './page/Home';
import AboutPage from './page/About';
import ServicesPage from './page/Services';
import ContactPage from './page/Contact';
import DevelopmentPortfolio from './page/DevPage';
import DesignPortfolio from './page/DesignPage';


function AnimatedRoutes(){
  
  const location = useLocation();
  const getPageName = (pathname)=>{
    let hasVisited = sessionStorage.getItem('hasVisited');
    const routes = {
      '/Home': hasVisited?'':'Welcome',
      '/About': 'About',
      '/Services': 'Services',
      '/Contact' : 'Contact',
      '/DevPage': 'Web Development',
      '/DesignPage': 'Product Design'
    };
    return routes[pathname]|| "Home";
  };
  return(
    <AnimatePresence >
      <PageTransition key={location.pathname} pageName={getPageName(location.pathname)}>
        <Routes location={location}>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element ={<AboutPage/>}/>
          <Route path='/Services' element ={<ServicesPage/>}/>
          <Route path='/Contact' element ={<ContactPage/>}/>
          <Route path='DevPage' element ={<DevelopmentPortfolio/>}/>
          <Route path='/DesignPage' element={<DesignPortfolio/>}/>
          <Route path='*' element ={<Navigate to="/Home" replace/>}/>
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}




function App() {
  return (
    <>
    
    <ThemeProvider>
      <Router>
      <Navbar/>
      <AnimatedRoutes/>
      <ScrollToTop/>
         <Footer/>
     </Router>
    </ThemeProvider>
    
    </>
  );
}

export default App;
