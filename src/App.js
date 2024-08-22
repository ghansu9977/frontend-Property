
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarCarousel from './componet/Carosal';
import Header from './componet/SignUp';
import Register from './componet/login';
import AddProperty from './componet/AddProperty';
import PropertyList from './componet/PropertyList';
import AboutUs from './componet/About';
import Services from './componet/Service';
import Blog from './componet/Blog';
import Contact from './componet/Contact';
import Footer from './componet/Footer';

function App() {
  return <>
  <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/AddProperty" element={<AddProperty />} />
  </Routes>
  <Header/>
  <CarCarousel/>
  <PropertyList/>
  <AboutUs/>
  <Services/>
  <Blog/>
  <Contact/>
  <Footer/>


  </>
}

export default App;
