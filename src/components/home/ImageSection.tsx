import Marquee from "react-fast-marquee";

const images = [
  { src: "/home_1.jpg", alt: "Card 1" },
  { src: "/home_2.jpg", alt: "Card 2" },
  { src: "/home_3.jpg", alt: "Card 3" },
  { src: "/home_4.jpg", alt: "Card 4" },
];

const ImageCarousel = () => {
  return (
    <section className="pb-5 mb-8 h-96 flex items-center justify-center">
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex">
          {images.map((img, index) => (
            <div
              key={index}
              className="max-w-[400px] h-[300px] overflow-y-hidden rounded-lg shadow-md mx-8"
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
