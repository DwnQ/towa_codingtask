import React, { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div className="">
      <div className="relative">
        <img className="opacity-80" src="HeroImage.jpg" alt="HeroImage" />
      </div>
      <div className="absolute text-zinc-100 font-semibold bottom-3/4 right-1/4 md:bottom-2/3 md:right-2/4 ml-10  text-2xl lg:text-4xl md:text-3xl tracking-wide">
        Success is not final, failure is not fatal: it is the courage to
        continue that counts
      </div>
    </div>
  );
};

export default Home;
