import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Democratic Education", link: "/democratic-education" },
  { name: "Skill Development", link: "/skill-development" },
  { name: "Health & Wellness", link: "/health-wellness" },
  { name: "Contact Us", link: "/contact-us" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms & Conditions", link: "/terms-conditions" },
];
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* COLUMN 1 */}
        <motion.div
          className="footer-col footer-about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
                  className="logo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                   EduHub
                </motion.div>
          <p>
            Pioneering Progressive Education and Holistic Development in the
            culturally rich and vibrant landscape of Kutch, EduHub
            stands as a beacon of transformative learning.
          </p>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.a  href="https://www.facebook.com"
  target="_blank" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <FaFacebookF />
            </motion.a>
            <motion.a  href="https://www.youtube.com"
  target="_blank" whileHover={{ scale: 1.2, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <FaYoutube />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3>Useful Links</h3>
          <ul>
  {menuItems.map((item, i) => (
    <motion.li
      key={i}
      whileHover={{ x: 5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Link
        to={item.link}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        → {item.name}
      </Link>
    </motion.li>
  ))}
</ul>
        </motion.div>

        {/* COLUMN 3 */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
  <FiMapPin className="location-icon" />
  <span>
    EduHub Learning Centre <br />
    Managed by EduHub Education Trust (Reg. No. E-1234/KUTCH) <br />
    Sector 12, Greenfield Road, Near Sunrise Park
  Bhuj-Kutch, Gujarat – 370001
  </span>
</li>

            <a href="tel:+919000012345"><li>
              <FiPhone /> +91 90000 12345
            </li></a>
            <a href="mailto:eduhub@gmail.com">
            <li>
              <FiMail /> eduhub@gmail.com
            </li>
            </a>
          </ul>
        </motion.div>

        {/* COLUMN 4 */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3>Visit Us</h3>
          <iframe
            title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58652.60249981221!2d69.62772048187773!3d23.25081293927736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e209000b6f17%3A0x7077f358af0774a6!2sBhuj%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1769748044031!5m2!1sen!2sin" 
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>

      {/* BOTTOM STRIP */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>Copyright © 2026 EduHub. All Rights Reserved.</p>
      </motion.div>

      {/* CLOUD SHAPES */}
      <motion.div
        className="footer-cloud cloud-left"
        animate={{ x: [0, 20, 0], y: [0, -5, 0] }} 
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M160 180 C90 180 70 135 110 110 C90 55 160 25 225 55 C260 10 345 10 380 60 C450 45 495 120 450 165 C510 210 445 250 370 230 C330 265 220 265 190 230 C150 250 95 230 115 190 C80 195 90 160 160 180 Z"
            fill="#ffffff"
            stroke="#91adc6"
            strokeWidth="3"
          />
        </svg>
      </motion.div>

      <motion.div
        className="footer-cloud cloud-right"
        animate={{ x: [0, -20, 0], y: [0, 5, 0] }} 
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M120 150 C70 150 50 110 80 90 C65 45 125 20 170 45 C200 10 270 10 300 45 C360 30 395 90 360 125 C400 160 350 205 290 190 C260 220 170 220 140 190 C105 205 70 185 85 155 C60 160 65 130 120 150 Z"
            fill="#ffffff"
            stroke="#91adc6"
            strokeWidth="3"
          />
        </svg>
      </motion.div>
    </footer>
  );
};

export default Footer;
