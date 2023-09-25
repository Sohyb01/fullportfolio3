"use client";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleScroll = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="flex items-center flex-col w-full fixed overflow-hidden shadow-xl bg-white py-4 border-b-[2px border-b-neutral-200">
      <nav className="section__styles w-full flex items-center justify-between">
        <a href="#" className="heading font-bold text-2xl">
          S.M
        </a>
        {/* Menu Container */}
        <div className="w-full flex justify-end items-center z-10">
          {/* Menu button SVG */}
          <svg
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
            className="md:hidden z-50"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
          >
            <path
              d="M1 1H17"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M1 6H17"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M1 11H17"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          {/* Links for larger screens */}
          <div className="hidden md:flex gap-8 items-center text-neutral-800">
            <a
              className="hover:text-neutral-600 duration-100 font-bold"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="hover:text-neutral-600 duration-100 font-bold"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hover:text-neutral-600 duration-100 font-bold"
              href="#about"
            >
              About
            </a>
            <a
              href="#contact"
              className="button-styles text-xs text-white bg-black border-black hover:text-black hover:bg-white duration-100 w-full"
            >
              GET IN TOUCH
            </a>
          </div>
          {/* openable Links for smaller screens */}
          <div
            className={`md:hidden flex left-0 top-0 py-[120px] items-center flex-col px-4 sm:px-6 gap-8 fixed h-[110vh] w-[100vw] bg-white text-neutral-800 duration-300 ${
              navbarOpen ? "menu-open" : "menu-closed"
            }`}
          >
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#skills"
              className="button-styles text-neutral-800 bg-white border-neutral-800 hover:text-white hover:bg-neutral-800 duration-100 w-full font-bold"
            >
              Skills
            </a>
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#projects"
              className="button-styles text-neutral-800 bg-white border-neutral-800 hover:text-white hover:bg-neutral-800 duration-100 w-full font-bold"
            >
              Projects
            </a>
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#about"
              className="button-styles text-neutral-800 bg-white border-neutral-800 hover:text-white hover:bg-neutral-800 duration-100 w-full font-bold"
            >
              About
            </a>
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#contact"
              className="button-styles text-neutral-800 bg-white border-neutral-800 hover:text-white hover:bg-neutral-800 duration-100 w-full font-bold"
            >
              GET IN TOUCH
            </a>
            {/* <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="bg-neutral-50 text-center text-neutral-800 w-full py-2 px-8"
            >
              Close Menu
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
