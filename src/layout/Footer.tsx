import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-light w-100 py-3">
      <p className="text-center text-secondary m-0">
        &copy;2024 TVSFlix. Made with ❤️ By
        <a
          href="https://www.linkedin.com/in/mazin-emad10l10"
          className="fw-bold text-primary text-decoration-none"
        >
          {" "}
          Mazin Emad
        </a>
      </p>
    </footer>
  );
};

export default Footer;
