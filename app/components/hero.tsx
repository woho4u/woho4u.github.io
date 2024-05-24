"use client";
import React, { useEffect, useState } from "react";
import ScrollIndicator from "./ScrollIndicator";
import Link from "next/link";
import Olink from "./Olink";

interface LettersProps {
  words: string[];
  colors: string[];
}

const Letters = ({ words, colors }: LettersProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [applyBehind, setApplyBehind] = useState(false);
  const [outLetterIndex, setOutLetterIndex] = useState(-1);
  const [transitionOut, setTransitionOut] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setTransitionOut(true);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(wordInterval);
  }, [words.length]);

  useEffect(() => {
    if (transitionOut) {
      const outInterval = setInterval(() => {
        setOutLetterIndex((prevIndex) => prevIndex + 1);
      }, 30);
      return () => clearInterval(outInterval);
    }
  }, [transitionOut]);

  useEffect(() => {
    if (!applyBehind) {
      const behindTimeout = setTimeout(() => {
        setApplyBehind(true);
      }, 50);
      return () => clearTimeout(behindTimeout);
    }
  }, [applyBehind]);

  useEffect(() => {
    if (applyBehind && currentLetterIndex < words[currentWordIndex].length) {
      const letterInterval = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      }, 40);

      return () => clearInterval(letterInterval);
    }
  }, [applyBehind, currentLetterIndex, currentWordIndex, words]);

  useEffect(() => {
    if (outLetterIndex === words[currentWordIndex].length) {
      setCurrentWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % words.length;
        setCurrentLetterIndex(-1); // Reset letter index for the new word
        setOutLetterIndex(-1); // Reset out letter index for the new word
        setApplyBehind(false); // Reset behind application
        setTransitionOut(false); // Reset transition out state
        return nextIndex;
      });
    }
  }, [outLetterIndex, words, currentWordIndex]);

  return (
    <>
      {words.map((word, wordIndex) => (
        <span className={`word ${colors[wordIndex]}`} key={wordIndex}>
          {word.split("").map((letter, letterIndex) => {
            let className = "out";
            if (wordIndex === currentWordIndex) {
              if (transitionOut && letterIndex <= outLetterIndex) {
                className = "out";
              } else if (letterIndex <= currentLetterIndex) {
                className = "in";
              } else if (applyBehind) {
                className = "behind";
              }
            }
            return (
              <span
                key={letterIndex}
                className={`letter ${className}`}
                style={{ visibility: letter === " " ? "hidden" : "visible" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
};

interface Props {
  handleClick: (e: React.MouseEvent) => void;
  href: string;
}

const Hero = ({ handleClick }: Props) => {
  const words = [
    "Oliver Kvamme Eriksen.",
    "a Developer.",
    "a Graphic Designer.",
    "a Student.",
  ];
  const colors = ["pomegranate", "belize", "wisteria", "green"];

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title ">
            <h1>Hi, I am&nbsp;</h1>
            <span>
              <Letters colors={colors} words={words} />
            </span>
          </div>
          <div className="hero-para-container">
            <p className="hero-para">
              I am a Result-Oriented Fullstack Web developer and graphic
              designer. In other words, I <strong>create</strong>, and I{" "}
              <i>love</i> it.{" "}
            </p>
          </div>
          <div id="container">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <Olink
                href="#about-me"
                onClick={handleClick}
                className="button-text"
                scroll={true}
              />
            </button>
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </>
  );
};

export default Hero;
