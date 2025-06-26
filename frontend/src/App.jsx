// src/App.jsx
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./comp/Navbar";
import HomePage from "./comp/HomePage";
import CreatePage from "./comp/CreatePage";
import { lightTheme, darkTheme } from "./theme";
import "./App.css"; // Import the CSS for layout and grid

function App() {
  const [colorMode, setColorMode] = useState("light");
  const theme = colorMode === "light" ? lightTheme : darkTheme;
  const toggleColorMode = () =>
    setColorMode((mode) => (mode === "light" ? "dark" : "light"));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        color: theme.text,
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <Navbar
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        theme={theme}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage theme={theme} />}
        />
        <Route
          path="/create"
          element={<CreatePage theme={theme} />}
        />
      </Routes>
    </div>
  );
}

export default App;
