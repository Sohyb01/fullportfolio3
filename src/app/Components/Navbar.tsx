"use client";
import React, { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleScroll = () => {
    setNavbarOpen(false);
  };
  window.addEventListener("scroll", () => handleScroll());
  return (
    <div className="nav-and-svgs-container flex items-center flex-col w-full fixed xl:absolute overflow-hidden">
      <nav className="py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-neutral-800 w-full flex justify-between items-center">
        {/* Socials Container */}
        <div className="w-full flex justify-start items-center gap-4 sm:gap-8 z-50">
          {/* Email SVG */}
          <div className="flex gap-2 items-center text-neutral-50 fill-neutral-50 hover:text-blue-400 hover:fill-blue-400 duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="14"
              viewBox="0 0 21 14"
              className="fill-inherit"
            >
              <path
                d="M17.6667 0H2.66669C1.28583 0 0.166687 1.04453 0.166687 2.33333V11.6667C0.166687 12.9555 1.28583 14 2.66669 14H17.6667C19.0475 14 20.1667 12.9555 20.1667 11.6667V2.33333C20.1667 1.04453 19.0456 0 17.6667 0ZM2.66669 1.75H17.6667C18.0113 1.75 18.2917 2.0117 18.2917 2.33333V3.14125L11.7761 8.17615C10.8702 8.87906 9.45809 8.8787 8.55458 8.17671L2.04169 3.14271V2.33333C2.04169 2.0125 2.32216 1.75 2.66669 1.75ZM17.6667 12.25H2.66669C2.32208 12.25 2.04169 11.9883 2.04169 11.6667V5.42135L7.35809 9.55573C8.14716 10.1646 9.14325 10.5 10.1667 10.5C11.1901 10.5 12.1882 10.165 12.978 9.55281L18.2917 5.42135V11.6667C18.2917 11.9875 18.0104 12.25 17.6667 12.25Z"
                className="fill-inherit"
              />
            </svg>
            sohyb0155@gmail.com
          </div>

          <a
            href="https://www.linkedin.com/in/sohyb-mansour-b237961ba/"
            className="fill-neutral-50 hover:text-blue-400 hover:fill-blue-400 duration-200"
            target="_blank"
          >
            <svg
              className="w-[20px] fill-inherit"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 20"
            >
              <path
                d="M18.9047 0H1.75742C0.971706 0 0.333313 0.647322 0.333313 1.44196V18.558C0.333313 19.3527 0.971706 20 1.75742 20H18.9047C19.6905 20 20.3333 19.3527 20.3333 18.558V1.44196C20.3333 0.647322 19.6905 0 18.9047 0ZM6.37796 17.1429H3.41367V7.59821H6.38242V17.1429H6.37796ZM4.89581 6.29464C3.94492 6.29464 3.17706 5.52232 3.17706 4.57589C3.17706 3.62946 3.94492 2.85714 4.89581 2.85714C5.84224 2.85714 6.61456 3.62946 6.61456 4.57589C6.61456 5.52679 5.84671 6.29464 4.89581 6.29464V6.29464ZM17.4896 17.1429H14.5253V12.5C14.5253 11.3929 14.503 9.96875 12.9851 9.96875C11.4405 9.96875 11.2038 11.1741 11.2038 12.4196V17.1429H8.23956V7.59821H11.0833V8.90179H11.1235C11.5208 8.15179 12.4896 7.36161 13.9315 7.36161C16.9315 7.36161 17.4896 9.33929 17.4896 11.9107V17.1429V17.1429Z"
                className="fill-inherit"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/201023717157"
            className="fill-neutral-50 hover:text-blue-400 hover:fill-blue-400 duration-200"
            target="_blank"
          >
            <svg
              className="w-[20px] fill-inherit"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 20"
            >
              <path
                d="M17.3378 2.90625C15.4672 1.03125 12.9762 0 10.3288 0C4.86456 0 0.418134 4.44643 0.418134 9.91071C0.418134 11.6563 0.873492 13.3616 1.73956 14.8661L0.333313 20L5.58778 18.6205C7.03421 19.4107 8.66367 19.8259 10.3244 19.8259H10.3288C15.7887 19.8259 20.3333 15.3795 20.3333 9.91518C20.3333 7.26786 19.2083 4.78125 17.3378 2.90625V2.90625ZM10.3288 18.1563C8.84671 18.1563 7.39581 17.7589 6.13242 17.0089L5.83331 16.8304L2.71724 17.6473L3.5476 14.6071L3.35117 14.2946C2.52528 12.9821 2.09224 11.4688 2.09224 9.91071C2.09224 5.37054 5.78867 1.67411 10.3333 1.67411C12.5342 1.67411 14.6012 2.53125 16.1547 4.08929C17.7083 5.64732 18.6637 7.71429 18.6592 9.91518C18.6592 14.4598 14.869 18.1563 10.3288 18.1563V18.1563ZM14.8467 11.9866C14.6012 11.8616 13.3824 11.2634 13.1547 11.183C12.9271 11.0982 12.7619 11.058 12.5967 11.308C12.4315 11.558 11.9583 12.1116 11.811 12.2813C11.6681 12.4464 11.5208 12.4688 11.2753 12.3438C9.81992 11.6161 8.86456 11.0446 7.90474 9.39732C7.65028 8.95982 8.15921 8.99107 8.63242 8.04464C8.71278 7.87946 8.6726 7.73661 8.6101 7.61161C8.5476 7.48661 8.05206 6.26786 7.84671 5.77232C7.64581 5.29018 7.44046 5.35714 7.28867 5.34821C7.14581 5.33929 6.98063 5.33929 6.81546 5.33929C6.65028 5.33929 6.38242 5.40179 6.15474 5.64732C5.92706 5.89732 5.28867 6.49554 5.28867 7.71429C5.28867 8.93304 6.17706 10.1116 6.2976 10.2768C6.4226 10.442 8.04313 12.942 10.5297 14.0179C12.1012 14.6964 12.7172 14.7545 13.503 14.6384C13.9806 14.567 14.9672 14.0402 15.1726 13.4598C15.378 12.8795 15.378 12.3839 15.3155 12.2813C15.2574 12.1696 15.0922 12.1071 14.8467 11.9866Z"
                className="fill-inherit"
              />
            </svg>
          </a>

          <a
            href="https://github.com/Sohyb01"
            className="fill-neutral-50 hover:text-blue-400 hover:fill-blue-400 duration-200"
            target="_blank"
          >
            <svg
              className="w-[20px] fill-inherit"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
            >
              <path
                d="M20.0685 48.3119C20.0685 48.56 19.7903 48.7586 19.4395 48.7586C19.0403 48.7958 18.7621 48.5973 18.7621 48.3119C18.7621 48.0638 19.0403 47.8653 19.3911 47.8653C19.754 47.828 20.0685 48.0266 20.0685 48.3119ZM16.3065 47.7536C16.2218 48.0017 16.4637 48.2871 16.8266 48.3615C17.1411 48.4856 17.504 48.3615 17.5766 48.1134C17.6492 47.8653 17.4194 47.5799 17.0565 47.4683C16.7419 47.3814 16.3911 47.5055 16.3065 47.7536ZM21.6532 47.5427C21.3024 47.6295 21.0605 47.8653 21.0968 48.1506C21.1331 48.3988 21.4476 48.56 21.8105 48.4732C22.1613 48.3864 22.4032 48.1506 22.3669 47.9025C22.3306 47.6668 22.004 47.5055 21.6532 47.5427ZM29.6129 0C12.8347 0 0 13.0643 0 30.2725C0 44.0316 8.44355 55.8056 20.504 59.9495C22.0524 60.2348 22.5968 59.2547 22.5968 58.4482C22.5968 57.679 22.5605 53.4359 22.5605 50.8305C22.5605 50.8305 14.0927 52.6915 12.3145 47.1333C12.3145 47.1333 10.9355 43.5229 8.95161 42.5924C8.95161 42.5924 6.18145 40.6445 9.14516 40.6818C9.14516 40.6818 12.1573 40.9299 13.8145 43.8827C16.4637 48.6717 20.9032 47.2946 22.6331 46.4757C22.9113 44.4906 23.6976 43.1135 24.5685 42.2946C17.8065 41.5254 10.9839 40.5205 10.9839 28.5852C10.9839 25.1733 11.9032 23.4612 13.8387 21.2776C13.5242 20.4711 12.496 17.1461 14.1532 12.8534C16.6815 12.047 22.5 16.2032 22.5 16.2032C24.9194 15.5084 27.5202 15.1487 30.0968 15.1487C32.6734 15.1487 35.2742 15.5084 37.6936 16.2032C37.6936 16.2032 43.5121 12.0346 46.0403 12.8534C47.6976 17.1585 46.6694 20.4711 46.3548 21.2776C48.2903 23.4736 49.4758 25.1857 49.4758 28.5852C49.4758 40.5577 42.3508 41.513 35.5887 42.2946C36.7016 43.2748 37.6452 45.1358 37.6452 48.0514C37.6452 52.2324 37.6089 57.4061 37.6089 58.4234C37.6089 59.2299 38.1653 60.21 39.7016 59.9246C51.7984 55.8056 60 44.0316 60 30.2725C60 13.0643 46.3911 0 29.6129 0ZM11.7581 42.7909C11.6008 42.915 11.6371 43.2003 11.8427 43.4361C12.0363 43.6346 12.3145 43.7214 12.4718 43.5601C12.629 43.4361 12.5927 43.1507 12.3871 42.915C12.1935 42.7165 11.9153 42.6296 11.7581 42.7909ZM10.4516 41.786C10.3669 41.9472 10.4879 42.1458 10.7298 42.2698C10.9234 42.3939 11.1653 42.3567 11.25 42.183C11.3347 42.0217 11.2137 41.8232 10.9718 41.6991C10.7298 41.6247 10.5363 41.6619 10.4516 41.786ZM14.371 46.2028C14.1774 46.3641 14.25 46.7363 14.5282 46.972C14.8065 47.2573 15.1573 47.2946 15.3145 47.096C15.4718 46.9348 15.3992 46.5626 15.1573 46.3268C14.8911 46.0415 14.5282 46.0043 14.371 46.2028ZM12.9919 44.379C12.7984 44.503 12.7984 44.8256 12.9919 45.111C13.1855 45.3963 13.5121 45.5204 13.6694 45.3963C13.8629 45.235 13.8629 44.9125 13.6694 44.6271C13.5 44.3418 13.1855 44.2177 12.9919 44.379Z"
                className="fill-inherit"
              />
            </svg>
          </a>
        </div>
        {/* Sun and Stars */}
        <div className="hidden w-full lg:flex justify-center gap-6">
          {/* Star SVG */}
          <svg
            className="w-3 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 11"
            fill="none"
          >
            <path
              d="M6.5 0L7.84708 4.1459H12.2063L8.67963 6.7082L10.0267 10.8541L6.5 8.2918L2.97329 10.8541L4.32037 6.7082L0.793661 4.1459H5.15292L6.5 0Z"
              fill="#FAFAFA"
            />
          </svg>
          {/* Star SVG */}
          <svg
            className="w-3 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 11"
            fill="none"
          >
            <path
              d="M6.5 0L7.84708 4.1459H12.2063L8.67963 6.7082L10.0267 10.8541L6.5 8.2918L2.97329 10.8541L4.32037 6.7082L0.793661 4.1459H5.15292L6.5 0Z"
              fill="#FAFAFA"
            />
          </svg>
          {/* Sun SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_15_135)">
              <path
                d="M15 20.6777C11.8934 20.6777 9.42773 18.1594 9.42773 15.1055C9.42773 12.0516 11.8418 9.42772 15 9.42772C18.1582 9.42772 20.5723 11.9461 20.5723 15C20.5723 18.0539 18.1055 20.6777 15 20.6777ZM29.8418 9.66796L26.1387 15.0527L29.8388 20.3853C30.2099 20.92 29.9035 21.6592 29.2631 21.7752L22.8764 22.9295L21.7221 29.3162C21.6064 29.9566 20.8672 30.2631 20.3323 29.8918L15 26.1392L9.61523 29.8397C9.08056 30.2107 8.3414 29.9045 8.22539 29.2641L7.125 22.875L0.735942 21.7207C0.0956884 21.6094 -0.210698 20.8652 0.160317 20.3848L3.86074 15L0.160552 9.66737C-0.210464 9.13271 0.0958056 8.39355 0.736176 8.27753L7.12289 7.12323L8.27719 0.736515C8.39291 0.0960865 9.13207 -0.21036 9.66703 0.160891L15 3.86132L20.3326 0.161125C20.8674 -0.210009 21.607 0.0962601 21.7224 0.736631L22.8767 7.12335L29.2635 8.27765C29.9062 8.39062 30.2109 9.13476 29.8418 9.66796ZM15 7.55272C10.858 7.55272 7.55273 10.9107 7.55273 15C7.55273 19.142 10.9107 22.4473 15 22.4473C19.0892 22.4473 22.4473 19.0898 22.4473 15C22.4473 10.8574 19.1426 7.55272 15 7.55272Z"
                fill="#FAFAFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_135">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 30)"
                />
              </clipPath>
            </defs>
          </svg>
          {/* Star SVG */}
          <svg
            className="w-3 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 11"
            fill="none"
          >
            <path
              d="M6.5 0L7.84708 4.1459H12.2063L8.67963 6.7082L10.0267 10.8541L6.5 8.2918L2.97329 10.8541L4.32037 6.7082L0.793661 4.1459H5.15292L6.5 0Z"
              fill="#FAFAFA"
            />
          </svg>
          {/* Star SVG */}
          <svg
            className="w-3 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13 11"
            fill="none"
          >
            <path
              d="M6.5 0L7.84708 4.1459H12.2063L8.67963 6.7082L10.0267 10.8541L6.5 8.2918L2.97329 10.8541L4.32037 6.7082L0.793661 4.1459H5.15292L6.5 0Z"
              fill="#FAFAFA"
            />
          </svg>
        </div>
        {/* Menu Container */}
        <div className="w-full flex justify-end">
          {/* Menu button SVG */}
          <svg
            onClick={() => {
              setNavbarOpen(!navbarOpen);
              console.log(navbarOpen);
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
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M1 6H17"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M1 11H17"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          {/* Links for larger screens */}
          <div className="hidden md:flex gap-8 text-neutral-50 text-lg">
            <a className="hover:text-blue-400 duration-200" href="#skills">
              Skills
            </a>
            <a className="hover:text-blue-400 duration-200" href="#projects">
              Projects
            </a>
            <a className="hover:text-blue-400 duration-200" href="#about">
              About
            </a>
            <a className="hover:text-blue-400 duration-200" href="#contact">
              Contact
            </a>
          </div>
          {/* openable Links for smaller screens */}
          <div
            className={`md:hidden flex left-0 top-0 py-[120px] items-center flex-col px-4 sm:px-6 gap-8 fixed h-[110vh] w-[100vw] bg-neutral-800 text-neutral-50 duration-300 ${
              navbarOpen ? "menu-open" : "menu-closed"
            }`}
          >
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#skills"
              className="bg-neutral-50 text-center text-neutral-800 w-full py-2 px-8"
            >
              Skills
            </a>
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#projects"
              className="bg-neutral-50 text-center text-neutral-800 w-full py-2 px-8"
            >
              Projects
            </a>
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#about"
              className="bg-neutral-50 text-center text-neutral-800 w-full py-2 px-8"
            >
              About
            </a>
            <a
              onClick={() => {
                setNavbarOpen(false);
              }}
              href="#contact"
              className="bg-neutral-50 text-center text-neutral-800 w-full py-2 px-8"
            >
              Contact
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
      {/* Wave SVG */}
      <svg
        className="w-[102vw] h-auto -translate-y-[1px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 6"
        fill="none"
      >
        <path
          d="M339.646 5.1105C285.831 5.78174 142.562 6.72147 0 5.1105L0.118015 0H340L339.646 5.1105Z"
          fill="#262626"
        />
      </svg>
      {/* Triangle SVG */}
      <svg
        className="w-[70px] h-[32px] -translate-y-[2px] lg:-translate-y-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 142 64"
        fill="none"
      >
        <path d="M142 0H0L70.8721 64L142 0Z" fill="#262626" />
      </svg>
    </div>
  );
}

export default Navbar;
