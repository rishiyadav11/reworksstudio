import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import LocalSEO from './components/LocalSEO.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
  <main>
    <Toaster/>
    <Navbar />

      <Hero />
    

      <About />
    

      <Art />
    

      <Services />
    


      <Pricing />
    

    {/* Extra anchor for SEO */}
    <div id="narnaul-marketing-agency"></div>

  
      <LocalSEO />
   

  
      <Contact />


    
      <Footer />
    
  </main>
 )
}

export default App;
