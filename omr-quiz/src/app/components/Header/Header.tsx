"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  {
    /*
    LOGIC FOR HIDING AND SHOWING HEADER ON SCROLL
     */
  }
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white transition-transform ${
        isVisible ? "vsible" : "hidden"
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="flex items-center justify-center font-sans-bold w-full h-8 bg-[#7fe0db] overflow-hidden relative">
        <div className="scrollingText flex space-x-20 text-sm	">
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
          <span>
            Die OMR Digital Marketing School 2025 startet bald – bist du dabei?
            🎓
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between px-14 py-5 ">
        <div className="flex flex-row space-x-10 items-center justify-start">
          <Image
            src="/omr_education_logo.svg"
            width={140}
            height={50}
            alt="omr_logo.svg"
          />
          <p className="cursor-pointer">Weiterbildungen</p>
          <p className="cursor-pointer">Geförderte Weiterbildungen</p>
          <p className="cursor-pointer">Unternehmenslösungen</p>
        </div>
        <div className="flex flex-row space-x-5 items-center justify-start">
          <img
            className="cursor-pointer"
            src="/icon.svg"
            alt="Account Icon"
            width="30"
            height="40"
          />
          <img
            className="cursor-pointer"
            src="/search.svg"
            alt="Account Icon"
            width="20"
            height="35"
          />

          <img
            className="cursor-pointer"
            src="/cart.svg"
            alt="Account Icon"
            width="30"
            height="40"
          />
        </div>
      </div>
    </header>
  );
}
