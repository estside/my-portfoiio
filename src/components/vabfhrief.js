import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navbarBg, setNavbarBg] = useState("#2b2d42");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);

      const sections = ["home", "about", "projects", "skills", "contact", "resume"];
      for (let id of sections) {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          const navHeight = document.querySelector(".navbar")?.offsetHeight || 80;
          if (rect.top <= navHeight && rect.bottom >= navHeight) {
            setActiveSection(id);
            const color = sec.getAttribute("data-color");
            if (color) setNavbarBg(color);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`navbar ${sticky ? "sticky" : ""}`}
        style={{ backgroundColor: navbarBg }}
      >
        <div className="left">
          <a href="#">
            <h2>LOGO</h2>
          </a>
        </div>

        <img
          src={
            menuOpen
              ? "https://arsentech.github.io/source-codes/icons/close.svg"
              : "https://arsentech.github.io/source-codes/icons/menu.svg"
          }
          alt="menu"
          className={`menu ${menuOpen ? "active" : ""}`}
          width="48"
          height="48"
          onClick={toggleMenu}
        />

        <div className={`right ${menuOpen ? "active" : ""}`}>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            About
          </a>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
            Skills
          </a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
            Projects
          </a>
          <a href="#resume" className={activeSection === "resume" ? "active" : ""}>
            Resume
          </a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
      </nav>

      <section>
        <h1>&nbsp;</h1>
      </section>
    </>
  );
};

export default Navbar;
