import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SeeVilla } from './components/SeeVilla/SeeVilla';
import { Header } from './components/Header/Header';
import { VillaGallery } from './components/VillaGallery/VillaGallery';

function App() {
  return (
    <>
      <Header />
      <SeeVilla />
      <VillaGallery />
    </>
  );
}

export default App;
