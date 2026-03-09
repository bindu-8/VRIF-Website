import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "https://th-i.thgim.com/public/todays-paper/dww130/article67056330.ece/alternates/FREE_1200/Nearby1_Jul070_G1GBESM2E.3.jpg.jpg",
    alt: "VTU Campus",
    caption: "VTU Belagavi Campus",
  },
  {
    img: "https://vtu.ac.in/wp-content/uploads/2019/08/vtu-banner-1a-1516x552.jpg",
    alt: "VRIF Lab",
    caption: "VRIF Innovation Lab",
  },
  {
    img: "https://vtu.ac.in/wp-content/uploads/2021/03/Research.jpg",
    alt: "Research at VRIF",
    caption: "Research Facilities at VRIF",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div className="w-full max-w-[1400px] mx-auto my-8 px-4 relative">
      <div className="overflow-hidden rounded-2xl shadow-vrif-card-hover h-[300px] md:h-[400px]">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.alt} className="min-w-full relative h-full">
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-center">
                <h3 className="text-primary-foreground text-xl font-semibold">{slide.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 w-full flex justify-between px-6 -translate-y-1/2 left-0">
        <button
          onClick={prev}
          className="bg-card/50 hover:bg-card w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="bg-card/50 hover:bg-card w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
