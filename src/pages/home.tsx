import ImageCarousel from "../component/home/image";
import IntroSection from "../component/home/Introsection";
import AnimatedPage from "../component/utils/AnimatedPage";
const HomePage = () => {
  return (
    <AnimatedPage>
      <IntroSection />
      <ImageCarousel />
    </AnimatedPage>
  );
};

export default HomePage;
