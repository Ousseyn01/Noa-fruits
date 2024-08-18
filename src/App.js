import './App.css';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Program from './components/Programs/Program';
import Testimonial from './components/Testimonials/Testimonial';
import Title from './components/Title/Title';

function App({}) {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Nos Services" title="Ventes de jus de fruits"/>
        <Program />
        <About />
        <Title subtitle="Ventes" title="NOA FRUITS"/>
        <Campus />
        <Title subtitle="TEMOIGNAGES" title="Ce que disent nos clients"/>
        <Testimonial />
        <Title subtitle="Contact-nous" title="Entrer en contact"/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
