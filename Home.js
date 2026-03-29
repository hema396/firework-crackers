import React from "react";
import { useHistory } from "react-router-dom";
import { FaStar, FaBolt, FaLeaf } from "react-icons/fa";

const Home = ({ onShopNow }) => {
  const history = useHistory();

  const categories = [
  { title: "Sparklers", key: "sparklers" },
  { title: "Rockets", key: "rockets" },
  { title: "Single Sound", key: "singlesound" },
  { title: "Atom Bombs", key: "atombombs" },
  { title: "Ground Chakkars", key: "groundchakkars" },
  { title: "Sky Shots", key: "skyshots" },
];

  const handleExplore = (categoryName) => {
    history.push(`/category/${categoryName}`);
  };

  return (
    <section className="body">
       <div className="hero-image">
        <img src="/Screenshot 2025-12-29 at 8.22.43 PM copy 2.png" alt="banner" />
      </div>

      {/* ================= HERO (TOP) ================= */}
      <section className="hero">
        <div className="hero-left">
          <img
            src="/Screenshot 2025-12-30 at 7.31.31 PM.png"
            alt="FWC Logo"
          />
        </div>

        <div className="hero-right">
          <h1>
            <span className="black">Fun With</span><br />
            <span className="blue">Crackers</span>
          </h1>

          <p>
            
Fun With Crackers has been a well-known Fireworks Store in Sivakasi.
What started out as a hobby has become our passion.

We offer quality products, unparalleled service, and the most competitive prices in town.

Trusted name among top companies in the Sivakasi fireworks business — manufacturing, wholesaling, and 
retailing traditional and modern fireworks.
          </p>

          
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="categories-section">
  <h2>Our Categories</h2>
  <div className="underline"></div>

  <div className="home-category-grid">
    {categories.map((cat) => (
      <div className="home-category-card" key={cat.key}>
        
        {/* 🔥 ICON HERE */}
      

<div className="icon-circle">
  <FaStar size={24} color="gold" /> 
</div>



        <h3>{cat.title}</h3>

        <p>
          Get quality {cat.title} <br />
          from Fun With Crackers
        </p>

        <button
          className="explore-btn"
          onClick={() => handleExplore(cat.key)}
        >
          EXPLORE →
        </button>
      </div>
    ))}
  </div>
</section>


      {/* ================= ACHIEVEMENTS ================= */}
      <section className="achievements">
        <h2>Our Achievements</h2>

        <div className="cards">
          <div className="card">
            <h3>100+</h3>
            <p>Customer Satisfaction</p>
          </div>

          <div className="card">
            <h3>200+</h3>
            <p>Products</p>
          </div>

          <div className="card">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="card">
            <h3>365+</h3>
            <p>Days Of Crackers</p>
          </div>
        </div>
      </section>

      {/* ================= CTA HERO ================= */}
      <section className="order-hero">
        <h1>
          Order Your Crackers <br />
          <span>& Gift Boxes Now</span>
        </h1>
        <p>Order online and get the best discounts on all products.</p>
        <button className="primary-btn" onClick={onShopNow}>
          PLACE YOUR ORDER
        </button>
      </section>

      
{/* ================= ADDRESS SECTION ================= */}
<section className="address-section">
  <div className="address-grid">

    <div className="address-box">
      <h3>Our Profile</h3>
      <p>
        <strong>Fun With Crackers</strong><br />
        Our products focus on customer happiness.
        Crackers are available in different specifications
        as per client requirements.
      </p>
      <button className="read-more">Read More â†’</button>
    </div>

    <div className="address-box">
      <h3>Contact Us</h3>
      <p>
        <strong>Address:</strong><br />
        Phoenix Crackers<br />
        Anil Kumar Eye Hospital Opp,<br />
        Sattur Road, Sivakasi
      </p>

      <p>
        <strong>Mobile:</strong><br />
        +91 63836 59214<br />
        +91 96554 56167
      </p>

      <p>
        <strong>Email:</strong><br />
        nivasramasamy27@gmail.com
      </p>
    </div>

    <div className="address-box">
      <h3>Quick Links</h3>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Price List</li>
        <li>Safety Tips</li>
        <li>Contact Us</li>
      </ul>
    </div>

  </div>
</section>

    </section>
  );
};

export default Home;