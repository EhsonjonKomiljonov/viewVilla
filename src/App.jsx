import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SeeVilla } from './components/SeeVilla/SeeVilla';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <SeeVilla />
    </>
  );
}

export default App;
