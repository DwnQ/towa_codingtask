import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-full mx-auto w-full mb-8">
      <hr className="w-full border-1 dark:border-gray-500 mb-8 " />
      <div className="w-full text-center max-w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div className="py-2 ">
          <div className="m-auto">
            <img className="m-auto" src="logo.svg" alt="logo" />
          </div>
        </div>
        <div className="py-2">
          <div className="lg:py-2">
            <Link to="/">Home</Link>
          </div>
          <div className="lg:py-2">
            <Link to="/api">API</Link>
          </div>
          <div className="lg:py-2">
            <Link to="/grid">GRID</Link>
          </div>
          <div className="lg:py-2">
            <Link to="mailto:lorem@gmail.com">Contact Us</Link>
          </div>
        </div>
        <div className="py-2">
          <div className="lg:py-2">Loremipsum.com</div>
          <div className="lg:py-2">Lorem ipsum Street 2</div>
          <div className="lg:py-2">+32 000 000 000</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
