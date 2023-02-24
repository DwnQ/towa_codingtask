import React, { FC } from "react";

interface data {
  data: Array<ProductGridProps>;
}
interface ProductGridProps {
  "product-name"?: string;
  "product-image-url"?: string;
  "header-top-right-text"?: string;
  "header-top-left-text"?: string;
  "product-url"?: string;
  "header-top-right-url"?: string;
  "product-cta-text"?: string;
}

const ProductGrid: FC<data> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {data.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md mt-5">
          <a href={product["product-url"]}>
            <img
              src={product["product-image-url"]}
              alt={product["product-name"]}
              className="object-contain w-full h-48 rounded-t-lg"
            />
          </a>
          <div className="p-4">
            <div className="flex justify-between">
              <a
                href={product["header-top-right-url"]}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {product["header-top-right-text"]}
              </a>
              <a
                href={product["product-url"]}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {product["header-top-left-text"]}
              </a>
            </div>
            <a
              href={product["product-url"]}
              className="block mt-2 font-semibold text-gray-800"
            >
              {product["product-name"]}
            </a>
            <div className="mt-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span>{product["product-cta-text"]}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
