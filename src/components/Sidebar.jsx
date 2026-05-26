 

import { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import profileImg from "../assets/logo.jpeg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger */}

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay */}

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}

      <aside className={`sidebar ${isOpen ? "active" : ""}`}>
        <img
          src={profileImg}
          alt="Ashif Profile"
          className="profile-img"
        />

        <h2 className="profile-name">Ashif</h2>

        <div className="social-links">
          <a
            href="https://www.instagram.com/aashif.lifts/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/pgmashif456"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/asif-khan-602a79364/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <ul>
          <li>
            <NavLink to="/" onClick={closeSidebar}>
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeSidebar}>
              <FaUser />
              <span>About</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" onClick={closeSidebar}>
              <FaFolderOpen />
              <span>Projects</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeSidebar}>
              <FaEnvelope />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;