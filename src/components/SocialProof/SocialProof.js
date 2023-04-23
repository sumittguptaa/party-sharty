import React from "react";
import './SocialProof.css'
function SocialProof() {
  return (
    <section className="social-proof">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        <div className="review">
          <p>"Amazing experience, great food, and service!"</p>
          <p>- Jane D.</p>
        </div>
        <div className="review">
          <p>"I booked my wedding here and everything was perfect."</p>
          <p>- John S.</p>
        </div>
        <div className="review">
          <p>"We had a blast at our party, thanks to this restaurant!"</p>
          <p>- Sarah K.</p>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
