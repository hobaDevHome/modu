import React from "react";
import TestimonialCard from "./TestimonialCard";

const FeedbackSection: React.FC = () => {
  const testimonials = [
    {
      name: "Emily Wilson",
      text: "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the lamps I ordered are perfect. I'm beyond satisfied!",
      variant: "light",
    },
    {
      name: "Sarah Thompson",
      text: "I absolutely love the quality and style. customer service was outstanding, and I received my order quickly. Highly recommended!",
      variant: "dark",
    },
    {
      name: "Olivia Martinez",
      text: "I had a great experience shopping on this website. The light I bought is trendy and unique. Highly satisfied!",
      variant: "quote",
    },
  ];

  return (
    <section className="self-center mt-28 w-full max-w-[1357px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
            <TestimonialCard
              name={testimonial.name}
              text={testimonial.text}
              variant={testimonial.variant}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
