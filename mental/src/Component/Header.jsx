// src/components/Header.jsx
import React from "react";

const Header = ({ title }) => {
  return (
    <header className="mb-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <hr className="border-gray-300 mt-2" />
    </header>
  );
};

export default Header;
