import React from "react";

interface HeroSectionProps {
  title: string;
  image: string;
  height?: string; 
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  image,
  height = "h-screen",
}) => {
  return (
    <section
      className={`relative flex items-center justify-center ${height} bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl text-white drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
