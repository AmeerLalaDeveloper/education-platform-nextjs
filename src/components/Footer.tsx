import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Educational Platform. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
