import ImageCarousel from "../component/home/ImageSection";
import InteractionSection from "../component/home/InteractionSection";
import IntroSection from "../component/home/IntroSection";
import AnimatedPage from "../component/utils/AnimatedPage";

const HomePage = () => {
  return (
    <AnimatedPage>
      <IntroSection />
      <ImageCarousel />
      <InteractionSection />
    </AnimatedPage>
  );
};

export default HomePage;
