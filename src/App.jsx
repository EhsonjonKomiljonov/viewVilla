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
  }, 4500);

  const container = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      x: [0, 0, 0, 0, 0, 700],
      opacity: [0, 0, 0, 0, 1, 1, 1, 0],
      transition: { duration: 3.7, delay: 1 },
    },
  };

  if (loader) {
    return (
      <div className="loader">
        <motion.img
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [-700, -10, -9, -8, -7, -6, 700],
            opacity: [
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 0,
            ],
            transition: { duration: 4 },
          }}
          src={Loader}
          alt="Loading..."
        />
        <motion.p variants={container} initial="hidden" animate="visible">
          View Villa
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
