import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import DestinyComponent from './components/DestinyComponent';
import WhyUs from './components/WhyUs';
import Banner2 from './components/Banner2';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Courses from './components/Courses';

function App() {
  return (
   <>
   <Navbar />
   <Hero />
   <Banner />
   <DestinyComponent />
   <Courses/>
   <WhyUs/>
   <Banner2/>
   <Faq/>
   <Footer/>
   </>
  );
}

export default App;
