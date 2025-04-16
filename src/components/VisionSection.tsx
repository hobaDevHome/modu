import React from "react";
import VisionCard from "./VisionCard";

const VisionSection: React.FC = () => {
  const visionItems = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/66240c6ec52d74f33c4aa1d964579482e8af47fa?placeholderIfAbsent=true",
      title: "Innovation",
      description:
        "At ModU, we are driven by the spirit of innovation. Our team continuously explores the latest advancements in 3D printing technology to deliver unique and customizable products that meet the evolving needs of our clients.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1167ddb742941196ca47454fe492b5659b6dfc15?placeholderIfAbsent=true",
      title: "Quality Assurance",
      description:
        "Quality is paramount in every product we create. We are committed to maintaining the highest standards in our materials and processes, ensuring that every item is durable, reliable, and of superior craftsmanship.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/171aff01a92ce16a6f538172e59af070414cae73?placeholderIfAbsent=true",
      title: "Cultural Heritage",
      description:
        "Located in Egypt, we take pride in drawing inspiration from our rich cultural heritage. This unique blend of tradition and modernity is reflected in our designs, offering products that are both innovative and culturally resonant.",
    },
  ];

  return (
    <section className="px-20 py-12">
      <h2 className="text-4xl text-black max-sm:text-2xl">
        Empowering Your Unique Vision
      </h2>
      <div className="flex gap-6 mt-8 max-md:flex-col">
        {visionItems.map((item, index) => (
          <VisionCard
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
