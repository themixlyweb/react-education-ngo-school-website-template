import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Information = ({
  image,
  heading,
  subheading,
  className,
  paragraphs = [],
  linkText,
  linkTo,
  imagePosition = "left",
}) => {
  return (
    <section className={`info-section information ${className}`}>
      <motion.div
        className={`info-wrapper ${
          imagePosition === "right" ? "reverse" : ""
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* IMAGE */}
        {image && (
          <motion.div
            className="info-image"
            initial={{
              opacity: 0,
              x: imagePosition === "right" ? 50 : -50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={image}
              alt={heading || "information"}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}

        {/* TEXT */}
        <motion.div
          className="info-content"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subheading && (
            <motion.p className="section-subheading" variants={textItem}>
              {subheading}
            </motion.p>
          )}

          {heading && (
            <motion.h2 className="section-heading" variants={textItem}>
              {heading}
            </motion.h2>
          )}

          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              className="section-text"
              variants={textItem}
            >
              {para}
            </motion.p>
          ))}

          {linkText && linkTo && (
            <motion.div variants={textItem}>
              <Link to={linkTo} className="info-link">
                {linkText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Information;
