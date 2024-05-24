"use client";
import React, { useState, useEffect } from "react";
import Header from "./header";

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        Class="offwhite"
        className={`sticky-header ${isSticky ? "visible" : ""}`}
      />

      <Header Class="offwhite" />
    </>
  );
};

export default StickyHeader;
