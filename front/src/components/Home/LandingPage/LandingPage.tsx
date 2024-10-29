import Recomendations from '../Recomendations/Recomendations';
import { FocusCardsDemo } from '../../features/cards-demo';
import Intro from '../Intro/Intro';
import About from '../about/About';
import Contact from '../contact/Contact';
import FeaturedProducts from '../featuredProducts/FeaturedProducts';
const LandingPage = () => {
  return (
    <div>
      <Intro />
      <FeaturedProducts/>
      <About />
      <Contact />
      <Recomendations />
    </div>
  );
};

export default LandingPage;
