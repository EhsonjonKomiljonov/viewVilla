import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SeeVilla } from './components/SeeVilla/SeeVilla';
import { Header } from './components/Header/Header';
import { ComfortRoom } from './components/ComfortRoom/ComfortRoom';

function App() {
  return (
    <>
      <Header />
      <SeeVilla />
      <ComfortRoom />
    </>
  );
}

export default App;
