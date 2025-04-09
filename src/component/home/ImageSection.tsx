import Marquee from "react-fast-marquee";

const images = [
  { src: "https://picsum.photos/id/11/400/300", alt: "Card 1" },
  { src: "https://picsum.photos/id/22/400/300", alt: "Card 2" },
  { src: "https://picsum.photos/id/32/400/300", alt: "Card 3" },
  { src: "https://picsum.photos/id/42/400/300", alt: "Card 4" },
  { src: "https://picsum.photos/id/52/400/300", alt: "Card 5" },
  { src: "https://picsum.photos/id/62/400/300", alt: "Card 6" },
  { src: "https://picsum.photos/id/72/400/300", alt: "Card 7" },
];

const ImageCarousel = () => {
  return (
    <section className="pb-5 mb-8 h-96 flex items-center justify-center">
      <Marquee pauseOnHover gradient={false} speed={150}>
        <div className="flex">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[240px] overflow-y-hidden rounded-lg shadow-md mx-8"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};
export default ImageCarousel;
