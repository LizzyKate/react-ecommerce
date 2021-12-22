import './css/templatemo-hexashop.css';
import './css/owl-carousel.css';
import './css/lightbox.css';
import './css/bootstrap.min.css';
import './css/font-awesome.css';
import './App.css';
import menOne from './images/men-01.jpg'
import menTwo from './images/men-02.jpg'
import menThree from './images/men-03.jpg'
import womenOne from './images/women-01.jpg'
import womenTwo from './images/women-02.jpg'
import womenThree from './images/women-03.jpg'
import kidOne from './images/kid-01.jpg'
import kidTwo from './images/kid-02.jpg'
import kidThree from './images/kid-03.jpg'
import Navbar from './Navbar';
import Landing from './Landing';
import Subscribe from './Subscribe';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'
import About from './About';
import Products from './Product';
import Contact from './Contact';
import Single from './Single-Product';
import Checkout from './Checkout';
import Form from './Form';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Single-Product/:id" element={<Single />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
