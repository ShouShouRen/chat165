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

export default function ImageCarousel() {
  return (
    <section className="py-5">
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex gap-8 px-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[200px] mx-4 h-[240px] overflow-y-hidden rounded-lg shadow-md gap-8"
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
}
