function AboutUs() {
  return (
    <div className="about-wrapper">

      {/* Top Banner Image */}
      <div className="about-img-top">
        <img
          src="/Screenshot 2026-01-01 at 6.00.16 PM.png"
          alt="cracker"
        />
      </div>

      {/* About Content Section */}
      <section className="about-container">
        
        <div className="about-image">
          <img
            src="/Screenshot 2026-01-01 at 6.36.19 PM.png"
            alt="Fun With Crackers"
          />
        </div>

        <div className="about-content">
          <h1>About Us</h1>
          <h3>Fun With Crackers</h3>

          <p>
            Fun With Crackers is a premium supplier of fancy fireworks.
            From traditional celebrations to modern extravaganzas,
            our products bring sparkle to every moment.
          </p>

          <p>
            Our trusted brands—French Terry, Vinayaga, Sony, and Century—
            symbolize quality, innovation, and dazzling fun.
          </p>

          <p>
            With a strong presence across Tamil Nadu and South India,
            we proudly serve individual customers and event organizers
            with customized service and unmatched value.
          </p>
        </div>

      </section>
    
    <section className="mvm-section">
      <div className="mvm-card">
        <h2>Motto</h2>
        <p>
          Our motto is SAFETY FIRST. Fun With Crackers Industry adopted
          several stringent quality testing measures as well as norms
          defined by the fireworks industry.
        </p>
      </div>

      <div className="mvm-card">
        <h2>Vision</h2>
        <p>
          The company’s presence is also established amongst retailers
          which makes our product accessible to all parts of India.
          Our products have carved a niche for their quality.
        </p>
      </div>

      <div className="mvm-card">
        <h2>Mission</h2>
        <p>
          We respect consumer’s benefit, safety, good quality,
          beautiful packing, effective service, and reasonable price.
          Our products meet high-quality standards.
        </p>
      </div>
    </section>

    <section className="about-extra-section">
    <footer className="about-extra-footer">



    <div className="footer-bottom">
        <h3>Important Notice</h3>

        <p>

        As per 2018 Supreme Court order, online sale of firecrackers are not permitted!
        We request you to add your products to the cart and submit enquiries.
        We will contact you within 24 hrs via WhatsApp or phone call.
        </p>

        <p>
        Our License No. ----. Fun With Crackers follows 100% legal & statutory
        compliances and parcels are sent through registered transport services.
        </p>

    </div>
    <div className="footer-content">

        <div className="footer-box">
        <h3>About Fireworks Store</h3>
        <p>
            Fireworks Store is your one-stop online shop for all things
            fireworks. We offer a wide selection of high-quality fireworks
            from trusted brands, ensuring safety and excitement for every celebration.
        </p>
        </div>

        <div className="footer-box">
        <h3>Contact Us</h3>

        <h5>Address</h5>
        <p>
            Phoenix Crackers<br />
            Anil Kumar Eye Hospital Opp.<br />
            Sattur Road<br />
            Sivakasi
        </p>

        <h5>Mobile</h5>
        <p>
            +91 63836 59214<br />

            +91 96554 56167
        </p>

        <h5>Email</h5>
        <p>
            info@funwithcrackers.com
        </p>
        </div>

        <div className="footer-box">
        <h3>Quick Links</h3>
        <ul className="quick-links">
            <li><button className="link-btn">Home</button></li>
            <li><button className="link-btn">About Us</button></li>
            <li><button className="link-btn">Price List</button></li>
            <li><button className="link-btn">Safety Tips</button></li>

            <li><button className="link-btn">Contact Us</button></li>
        </ul>
        </div>

    </div>
    

    <div className="shop-now">Shop Now</div>
    </footer>

    </section>






    </div>
  );
}

export default AboutUs;