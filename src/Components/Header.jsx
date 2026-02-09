import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook } from "react-icons/fa";


const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdown(null);
    setSidebarOpen(false);
  };

  const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Democratic Education", path: "/democratic-education" },
  { name: "Skill Development", path: "/skill-development" },
  { name: "Health & Wellness", path: "/health-wellness" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Events & Activities", path: "/event-activities" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Donation", path: "/donation" },
];


  return (
    <>
  <header className="site-header">
  <div className="header-container">
    {/* Logo */}
    <Link to="/">
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
         EduHub
      </motion.div>
    </Link>

    {/* Desktop Navigation */}
    <nav className="nav-links">
      <motion.div whileHover={{ y: -2 }} className="nav-item">
        <Link to="/">Home</Link>
      </motion.div>
      <motion.div whileHover={{ y: -2 }} className="nav-item">
        <Link to="/about-us">About Us</Link>
      </motion.div>

      {/* Dropdown */}
      <div
        className={`dropdown ${openDropdown === "approach" ? "show" : ""}`}
        onMouseEnter={() =>
          window.innerWidth > 992 && setOpenDropdown("approach")
        }
        onMouseLeave={() =>
          window.innerWidth > 992 && setOpenDropdown(null)
        }
      >
        <button onClick={() => toggleDropdown("approach")}>
          Our Approach ▾
        </button>

       <AnimatePresence>
  {openDropdown === "approach" && (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <motion.p
        whileHover={{ x: 5 }}
        onClick={() => handleNavigate("/democratic-education")}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <FaBook size={16} color="#ed6956" /> Democratic Education
      </motion.p>

      <motion.p
        whileHover={{ x: 5 }}
        onClick={() => handleNavigate("/skill-development")}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <FaBook size={16} color="#ed6956" /> Skill Development
      </motion.p>

      <motion.p
        whileHover={{ x: 5 }}
        onClick={() => handleNavigate("/health-wellness")}
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <FaBook size={16} color="#ed6956" /> Health & Wellness
      </motion.p>
    </motion.div>
  )}
</AnimatePresence>
      </div>

      <motion.div whileHover={{ y: -2 }} className="nav-item">
        <Link to="/testimonials">Testimonials</Link>
      </motion.div>
      <motion.div whileHover={{ y: -2 }} className="nav-item">
        <Link to="/event-activities">Events & Activities</Link>
      </motion.div>
      <motion.div whileHover={{ y: -2 }} className="nav-item">
        <Link to="/contact-us">Contact Us</Link>
      </motion.div>
      <motion.div whileHover={{ y: -2 }} className="nav-item">
        <Link to="/donation">Donation</Link>
      </motion.div>
    </nav>

    {/* Hamburger Button (Mobile / Tablet ≤992px) */}
    <button
      className="hamburger-btn"
      onClick={() => setSidebarOpen((prev) => !prev)}
    >
      ☰
    </button>
  </div>

  {/* Sidebar (fixed, sibling to header container) */}
  <AnimatePresence>
    {sidebarOpen && (
      <motion.aside
        className="sidebar"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link to="/">
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
         Edu<span>Hub</span>
      </motion.div>
    </Link>
     <nav className="nav-links">
  {navItems.map((item, i) => (
    <motion.p
      key={i}
      whileHover={{ x: 5 }}
      onClick={() => handleNavigate(item.path)}
      style={{ cursor: "pointer" }}
    >
      {item.name}
    </motion.p>
  ))}
</nav>
      </motion.aside>
    )}
  </AnimatePresence>
</header>
<div className="margin-div"></div>
</>

  );
};

export default Header;
