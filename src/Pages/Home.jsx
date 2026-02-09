/**CORE LIBRARIES IMPORT */
import React,{useMemo} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**COMPONENTS IMPORT */
import Information from "../Components/Information";


/**IMAGES IMPORT */
import WelcomeImg from '../Images/welcome-img.webp';
import heroImg from "../Images/hero-img.webp";


/**DATA IMPORT */
import { approachCards } from "../Data";



const Home=()=>{

  const floating = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const stars = useMemo(() => {
  return Array.from({ length: 5 }).map(() => ({
    size: Math.random() * 20 + 28,  
    duration: Math.random() * 6 + 6, 
    delay: Math.random() * 3,
  }));
}, []);

    return(
        <>

      {/**HERO SECTION */}
<section className="hero-section">
      {/* Flying stars */}
{stars.map((star, i) => (
  <motion.svg
    key={i}
    className={`star star-${i + 1}`}
    width={star.size}
    height={star.size}
    viewBox="0 0 24 24"
    animate={{
      y: [0, -25, 0],
      rotate: [0, 15, -15, 0],
    }}
    transition={{
      duration: star.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: star.delay,
    }}
  >
    <path
      d="M12 2L14.9 8.1L21.5 9.2L16.8 14L18 20.5L12 17.2L6 20.5L7.2 14L2.5 9.2L9.1 8.1L12 2Z"
      fill="#ed6956"
    />
  </motion.svg>
))}



      <div className="hero-container">
        {/* LEFT */}
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h1>
      <span>EduHub</span> — learning beyond School
      </h1>
      <p>
    A path where happiness, freedom, and core values come together to create a truly meaningful life.
      </p>

      <div className="hero-buttons">
        <Link to='/contact-us'>
        <motion.button
          className="primary-btn"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Apply Now
        </motion.button>
        </Link>
         <Link to='/about-us'>
        <motion.button
          className="secondary-btn"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Learn More
        </motion.button>
        </Link>
      </div>
    </motion.div>

        {/* RIGHT */}
        <div className="hero-image-wrapper">
          {/* Rotating uneven circle */}
          <motion.div
            className="uneven-circle"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Cloud shapes */}
       {/* CLOUD 1 */}
<motion.svg
  className="cloud cloud-1"
  viewBox="0 0 420 220"
  xmlns="http://www.w3.org/2000/svg"
  animate={{ x: [0, 40, 0] }}
  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
>
  <path
    d="
      M120 150
      C70 150 50 110 80 90
      C65 45 125 20 170 45
      C200 10 270 10 300 45
      C360 30 395 90 360 125
      C400 160 350 205 290 190
      C260 220 170 220 140 190
      C105 205 70 185 85 155
      C60 160 65 130 120 150
      Z"
    fill="#ffffff"
    stroke="#91adc6"      
    strokeWidth="3"
  />
</motion.svg>


{/* CLOUD 2 */}
<motion.svg
  className="cloud cloud-2"
  viewBox="0 0 520 260"
  xmlns="http://www.w3.org/2000/svg"
  animate={{ x: [0, -50, 0] }}
  transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
>
  <path
    d="
      M160 180
      C90 180 70 135 110 110
      C90 55 160 25 225 55
      C260 10 345 10 380 60
      C450 45 495 120 450 165
      C510 210 445 250 370 230
      C330 265 220 265 190 230
      C150 250 95 230 115 190
      C80 195 90 160 160 180
      Z"
    fill="#ffffff"
    stroke="#91adc6"      
    strokeWidth="3"
  />
</motion.svg>



          <motion.img
            src={heroImg}
            alt="EduHub — learning beyond School"
            className="hero-image"
            {...floating}
          />
        </div>
      </div>
    </section>


      {/**WELCOME SECTION */}
       <Information
  image={WelcomeImg}
  subheading="Welcome to EduHub"
heading="A Progressive Learning Ecosystem"
paragraphs={[
  "At EduHub, we are dedicated to nurturing a transformative learning environment where happiness, freedom, and core values come together to support holistic growth. Our approach goes beyond conventional education, fostering a supportive space where curiosity, creativity, and personal development thrive side by side. Through innovative learning methods and a strong values-driven foundation, we guide learners on a meaningful journey that prepares them for life, not just academics. Join EduHub—where learning has no limits and the pursuit of knowledge, purpose, and values becomes a lifelong experience.",
]}
  linkText="Discover More"
  linkTo="/about-us"
   imagePosition="right"
/>

      {/**APPROACH CARDS SECTION */}

    <section className="approach-section">
      <div className="approach-inner">

        {/* SUBHEADING */}
        <motion.p
          className="section-subheading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Fostering Excellence, Igniting Passion
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
         A Distinctive Approach to Learning at EduHub
        </motion.h2>

        {/* TEXT */}
        <motion.p
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our approach to learning goes beyond conventional boundaries. We strive to create an educational experience that not only builds knowledge but also nurtures creativity, critical thinking, and a lifelong love for learning. Through innovative methodologies and a strong focus on holistic development, EduHub empowers learners to grow academically, personally, and purposefully.
        </motion.p>

        {/* CARDS */}
        <div className="approach-cards">
          {approachCards.map((item, i) => (
            <motion.div
              className="approach-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
              }}
            >
              <motion.div
                className="approach-img"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
              >
                <img src={item.img} alt={item.title} />
              </motion.div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
        </>
    )
}

export default Home;