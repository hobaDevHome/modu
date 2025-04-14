import React from "react";

const EventsSection = () => {
  return (
    <section className="events-section">
      <h2>Our Upcoming events:</h2>
      <div className="event-details">
        <div className="event-info">
          <h3>21 January 2025</h3>
          <p>03:00 PM</p>
          <button>Get your invitation</button>
        </div>
        <div className="event-image">
          <img
            src="/images/el-sawy-culture-wheel.png"
            alt="El Sawy Culturewheel"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
