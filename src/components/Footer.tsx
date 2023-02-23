import React, { FC } from "react";

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-full mx-auto w-full mb-8">
      <hr className="w-full border-1 dark:border-gray-700 mb-8 mt-10" />
      <div className="w-full text-center max-w-full grid grid-cols-3 max-lg:grid-cols-1 gap-pb-16">
        <div>
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
        <div>
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
        <div>
          <div>asd</div>
          <div>asd</div>
          <div>asd</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
