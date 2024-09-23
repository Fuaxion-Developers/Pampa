import Carousel from '../carousel/carousel';
import Recomendations from '../Recomendations/Recomendations';
import { FocusCardsDemo } from '../features/cards-demo';
const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <div>
        <h1 className=' text-[24px] text-center font-semibold mb-4 '>PRODUCTOS NOVEDOSOS</h1>
        <FocusCardsDemo/>
      </div>
      
      <Recomendations />
    </div>
  );
};

export default LandingPage;
