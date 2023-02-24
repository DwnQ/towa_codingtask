import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 ">
      <Link className="p-5" to="/">
        <img src="logo.svg" alt="logo" />
      </Link>
      <nav>
        <section className="flex lg:hidden">
          <div
            className="space-y-2 mr-5 p-5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "absolute showMenuNav overflow-auto scrollbar-hide"
                : "hideMenuNav"
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/api">API</Link>
              </li>
              <li>
                <Link to="/grid">GRID</Link>
              </li>
              <li>
                <Link to="mailto:lorem@gmail.com">Contact Us</Link>
              </li>
            </ul>
          </div>
        </section>
        <ul className="hidden space-x-8 lg:flex mr-5">
          <li className="p-5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-5">
            <Link to="/api">API</Link>
          </li>
          <li className="p-5">
            <Link to="/grid">GRID</Link>
          </li>
          <li className="p-5">
            <Link to="mailto:lorem@gmail.com">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
