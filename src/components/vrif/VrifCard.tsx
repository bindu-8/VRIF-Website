import type { ReactNode } from "react";

interface VrifCardProps {
  img?: string;
  alt?: string;
  title: string;
  children?: ReactNode;
}

const VrifCard = ({ img, alt, title, children }: VrifCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-vrif-card transition-all duration-400 hover:-translate-y-2 hover:shadow-vrif-card-hover group">
      {img && (
        <div className="h-[200px] overflow-hidden">
          <img
            src={img}
            alt={alt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-primary font-semibold text-lg mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default VrifCard;
