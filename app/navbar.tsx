"use client";

import Image from "next/image";
import UsedLinksPage from "./components/used-links";
import { useState } from "react";

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(true);
  return (
    <>
      <nav className="sticky top-0 z-10 pb-5 bg-blue-950 border-gray-200 dark:bg-white-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
          <div
            style={{ display: "flex" }}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-lg p-1"
              style={{
                borderRadius: "50%",
                border: "2px solid #fff",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                objectFit: "cover",
                width: "100px",
                height: "100px",
                margin: "0 20px",
              }}
            />
            <div className="ml-4 flex flex-col items-start">
              <h1 className="max-w-80 mb-2 text-2xl font-semibold pt-10 text-gray-300">
                {"Full Stack Developper and Devops Engineer".toUpperCase()}
              </h1>
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-toggle"
            type="button"
            onClick={() => setNavbarToggle(!navbarToggle)}
            className="m-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-toggle"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="pt-6 w-full md:block md:w-auto"
            hidden={navbarToggle}
            id="navbar-toggle"
          >
            <UsedLinksPage />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
