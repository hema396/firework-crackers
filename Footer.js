import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h3>Our Profile</h3>
          <h4>Fun With Crackers</h4>
          <p>
            Our products focus on customer happiness and quality.
          </p>
          <button>Read More →</button>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>Sivakasi, Tamil Nadu</p>
          <p>+91 63836 59214</p>
          <p>nivasramasamy27@gmail.com</p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Price List</li>
            <li>Safety Tips</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          As per Supreme Court order, online sale of crackers not permitted.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
