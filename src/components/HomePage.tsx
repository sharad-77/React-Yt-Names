import Header from './layout/Header';
import HeroSection from './sections/HeroSection';

function HomePage() {
  return (
    <div className="h-full w-full justify-center items-center ">
      <div className="w-full bg-[#F0F5FF] h-230">
        <div className="h-18 md:h-28 w-full flex md:justify-center md:items-center">
          <Header />
        </div>
        <HeroSection />
      </div>
    </div>
  );
}

export default HomePage;
