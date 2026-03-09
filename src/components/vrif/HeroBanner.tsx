const HeroBanner = () => {
  return (
    <header className="gradient-hero text-primary-foreground text-center py-16 px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage:
            "url('https://vtu.ac.in/wp-content/uploads/2022/03/vtu-campus.jpg')",
        }}
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-4 relative z-10 animate-fade-in-up drop-shadow-lg">
        VRIF - Visvesvaraya Research and Innovation Foundation
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto relative z-10 animate-fade-in-up opacity-0 [animation-delay:0.3s] drop-shadow">
        Empowering Innovation, Research, and Entrepreneurship at VTU Belagavi
      </p>
    </header>
  );
};

export default HeroBanner;
