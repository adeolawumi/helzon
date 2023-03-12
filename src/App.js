import Home from './components/home/home'
import ContactUs from './components/Contact-Us/ContactUs';
import './components/home/home.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer'
import About from './components/About/About';
import './App.css'
import WhyUsMainPage from './components/WhyUsMainPage/WhyUsMainPage';
import OurProjects from './components/Projects/OurProjects'
import { BrowserRouter, Route,	Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>  
      <div className="App">
          <Navbar></Navbar>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/about' element={<About />} />
              <Route path='/insights' element={<WhyUsMainPage/>} />
              <Route path='/projects' element={<OurProjects/>} />
            </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
