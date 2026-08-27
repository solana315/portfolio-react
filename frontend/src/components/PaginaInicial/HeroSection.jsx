import HeroCopy from './HeroCopy';
import HeroVisual from './HeroVisual';
import HeroQuote from './HeroQuote';
import FooterList from '../FooterList';

const HeroSection = () => (
  <main className="hero-wrap container-fluid px-4 px-xl-5 pb-4">
    <div className="row align-items-center gx-4 gx-xl-5">
      <HeroCopy />
      <HeroVisual />
    </div>

    <HeroQuote />
  </main>
);

export default HeroSection;
