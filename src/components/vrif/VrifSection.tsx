import { useEffect, useRef, useState, type ReactNode } from "react";

interface VrifSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const VrifSection = ({ id, title, children }: VrifSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-12 px-8 max-w-[1200px] mx-auto my-8 bg-card rounded-lg shadow-vrif-card relative overflow-hidden transition-all duration-600 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute top-0 left-0 w-[5px] h-full gradient-accent-bar" />
      <h2 className="text-primary text-3xl font-bold mb-6 pl-4 relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-secondary" />
      </h2>
      {children}
    </section>
  );
};

export default VrifSection;
