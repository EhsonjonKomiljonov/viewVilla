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
import Loader from './assets/images/loader.svg';

function App() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 3500);

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
        <motion.img
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [-700, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0],
            scale: [1, 1, 1, 1, 5],
            opacity: [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
            ],
            transition: { duration: 3.9 },
          }}
          src={Loader}
          alt="Loading..."
        />
        <motion.p
          className="waviy"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <span style={{ '--i': 1 }}>V</span>
          <span style={{ '--i': 2 }}>i</span>
          <span style={{ '--i': 3 }}>e</span>
          <span style={{ '--i': 4 }}>w</span>
          <span style={{ '--i': 5 }}>V</span>
          <span style={{ '--i': 6 }}>i</span>
          <span style={{ '--i': 7 }}>l</span>
          <span style={{ '--i': 8 }}>l</span>
          <span style={{ '--i': 9 }}>a</span>
        </motion.p>
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
