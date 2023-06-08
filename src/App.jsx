import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SeeVilla } from './components/SeeVilla/SeeVilla';
import { Header } from './components/Header/Header';
import { ComfortRoom } from './components/ComfortRoom/ComfortRoom';
import { VillaGallery } from './components/VillaGallery/VillaGallery';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { AboutUs } from './components/AboutUs/AboutUs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Loader from './assets/videos/loading.mp4';

function App() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 4000);

  const container = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      x: [-300, 0, 0],
      scale: [1, 1, 1, 1, 5],
      opacity: [0, 1, 1, 1, 1, 1, 0],
      transition: { duration: 2.7, delay: 1 },
    },
  };

  if (loader) {
    return (
      <div className="loader">
        <video autoPlay muted playsInline src={Loader}></video>
      </div>
    );
  }

  return (
    <>
      <Header />
      <SeeVilla />
      <ComfortRoom />
      <AboutUs />
      <VillaGallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
