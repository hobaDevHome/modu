import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Samira Khaled",
    avatar: "/images/avatar-1.png",
    text: "ModU transformed my home with their unique 3D-printed designs. The quality and precision are unmatched, and the customization options allowed me to personalize everything to my liking. Plus, their service was exceptional! ModU truly brings creativity to life in Egypt.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>Real Customer Feedback</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-item">
          <img src={testimonial.avatar} alt={testimonial.name} />
          <p>{testimonial.text}</p>
          <span>- {testimonial.name}</span>
        </div>
      ))}
    </section>
  );
};

export default TestimonialsSection;
