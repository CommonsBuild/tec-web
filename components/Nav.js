import React from "react";
import Image from "next/image";

const navItems = [
  ["About", "#"],
  ["Mission", "#"],
  ["Community", "#"],
  ["Ecosystem", "#ecosystem"],
  ["Forum", "#forum"],
];

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav-bg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-tec-blue hover:bg-tec-yellow focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleOpen}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="block lg:hidden">
                <Image
                  className="pt-2"
                  src="/images/TEC-Logo-Compact-Light.png"
                  width="87"
                  height="42"
                  alt="TEC"
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/images/TEC-Logo-Full-Light.png"
                  width="220"
                  height="60"
                  alt="TEC"
                />
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6 sm:w-full">
              <div className="flex justify-end h-full items-center">
                {navItems.map((item) => (
                  <a
                    href={item[1]}
                    className="bai-jamjuree font-semibold uppercase text-white hover:text-tec-yellow px-3 py-2 text-base"
                  >
                    {item[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="hidden lg:block bai-jamjuree font-semibold uppercase semibold bg-tec-yellow focus:outline-none text-black text-base py-2.5 px-5"
              onClick={() =>
                window.open("https://forum.tecommons.org/", "_blank")
              }
            >
              Get involved
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                href={item[1]}
                className="bai-jamjuree font-semibold uppercase text-white hover:text-tec-yellow  block px-3 py-2 rounded-md text-base"
              >
                {item[0]}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
