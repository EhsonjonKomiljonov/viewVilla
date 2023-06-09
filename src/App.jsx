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
import { Loading } from './components/Loading/Loading';

function App() {
  const [loader, setLoader] = useState(true);
  // setTimeout(() => {
  //   setLoader(false);
  // }, 3500);

  if (loader) {
    return (
      <div className="loader">
        <Loading />
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
