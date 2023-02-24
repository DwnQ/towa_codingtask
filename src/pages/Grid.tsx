import React, { FC } from "react";
import data from "@constants/Product_Grid.json";
import ProductGrid from "@components/ProductGrid";

interface GridProps {}

const About: FC<GridProps> = ({}) => {
  return (
    <div>
      <ProductGrid key={1} data={data.CO} />
      <ProductGrid key={2} data={data.WI} />
    </div>
  );
};

export default About;
