"use client";

import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/images/landingPage.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: `${scrollPosition * 0.5}px`, // Adjust the multiplier for different parallax effects
      }}
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Your landing page content here */}
      </div>
    </div>
  );
};

export default LandingPage;
