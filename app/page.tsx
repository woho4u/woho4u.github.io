"use client";
import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";
import StickyHeader from "./components/StickyHeader";
import Footer from "./components/Footer";
import "../lib/fontawesome";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const aboutMeElement = document.getElementById("about-me");
    if (aboutMeElement) {
      const top = aboutMeElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <StickyHeader />
      <Hero handleClick={handleClick} />
      <div className="main-container gray1-bg">
        <About />
        <Contact />
        <Footer />

        <div className="karm"></div>
      </div>
    </>
  );
}
