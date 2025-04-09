import ImageCarousel from "../components/home/ImageSection";
import InteractionSection from "../components/home/InteractionSection";
import IntroSection from "../components/home/IntroSection";
import AnimatedPage from "../components/utils/AnimatedPage";

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
