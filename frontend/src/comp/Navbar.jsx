// src/comp/Navbar.jsx
import React from "react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = ({ colorMode, toggleColorMode, theme }) => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 36px",
      background: theme.navbarBg,
      color: theme.navbarText,
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      transition: "background 0.3s, color 0.3s",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}
  >
    <Link
      to="/"
      style={{
        fontWeight: "bold",
        fontSize: 28,
        textDecoration: "none",
        color: theme.navbarText,
        letterSpacing: 1,
      }}
    >
      Product Store 🛒
    </Link>
    <div style={{ display: "flex", gap: 16 }}>
      <Link to="/create">
        <button
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            border: "none",
            background: theme.buttonBg,
            color: theme.buttonText,
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: 16,
            transition: "background 0.2s",
          }}
        >
          + Create
        </button>
      </Link>
      <button
        onClick={toggleColorMode}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 24,
          color: theme.navbarText,
        }}
        title="Toggle color mode"
      >
        {colorMode === "light" ? <IoMoon /> : <LuSun />}
      </button>
    </div>
  </nav>
);

export default Navbar;
