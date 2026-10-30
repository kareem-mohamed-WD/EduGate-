import { useState } from "react";

const Navbar = ({ padgs, setPadgs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["الاقترحات", "الشكاوى", "الجداول", "الإعلانات", "الرئيسية"];

  const linkIcons = {
    الاقترحات: "fa-lightbulb",
    الشكاوى: "fa-comment-dots",
    الجداول: "fa-calendar-days",
    الإعلانات: "fa-bullhorn",
    الرئيسية: "fa-house",
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>{" "}
        </button>
        <div className="navbar-brand" onClick={() => setPadgs("الرئيسية")}>
          <img
            className="Website-icon"
            src="Website icon.png"
            alt="Website icon"
          />
          <span>EduGate | البوابة الطلابية</span>
        </div>

        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link}>
              <button
                className={`nav-item ${padgs === link ? "active" : ""}`}
                onClick={() => {
                  setPadgs(link);
                  setIsOpen(false);
                }}
              >
                <i className={`fa-solid ${linkIcons[link]}`}></i> {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
