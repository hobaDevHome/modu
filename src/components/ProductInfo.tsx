"use client";

import React, { useState } from "react";
import ShippingInfo from "./ShippingInfo";

const ProductInfo: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="self-end mt-14 w-full max-w-[1176px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[45%] max-md:ml-0 max-md:w-full">
          <figure className="flex flex-col grow text-2xl font-semibold text-center text-neutral-700 max-md:mt-10 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/939dba83943c794801c474ce876d63a19db5296c?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
              className="object-contain w-full aspect-[0.73] max-md:max-w-full"
              alt="Pendant Light"
            />
            <figcaption className="self-center mt-9">Pendant Light</figcaption>
          </figure>
        </div>

        <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start pl-3 mx-auto mt-12 w-full bg-white max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch h-[98px] max-md:max-w-full">
              <p className="text-2xl tracking-wide text-black max-md:max-w-full">
                This pendant light features a sleek design that adds a touch of
                sophistication to living rooms, dining areas, and bedrooms.
              </p>
              <p className="mt-3 text-2xl font-bold tracking-wide text-gray-800">
                450 EGP
              </p>
            </div>

            <div className="mt-12 text-base font-semibold tracking-wide text-gray-800 whitespace-nowrap max-md:mt-10">
              <label htmlFor="color-selection">Color</label>
              <div
                className="flex gap-3 mt-3 min-h-[33px]"
                id="color-selection"
              />
            </div>

            <div className="mt-7 max-w-full w-[101px]">
              <label className="text-base font-semibold tracking-wide text-gray-800">
                Quantity
              </label>
              <div className="flex relative flex-col mt-4 w-full aspect-[3.258] max-w-[101px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dc041dffa39a7385d695e935c87964368170409?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
                  className="object-cover absolute inset-0 size-full"
                  alt="Quantity selector background"
                />
                <div className="flex relative gap-5 justify-between">
                  <button
                    className="flex shrink-0 h-[31px] w-[31px]"
                    onClick={decreaseQuantity}
                    aria-label="Decrease quantity"
                  />
                  <span className="flex items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    className="flex shrink-0 h-[31px] w-[31px]"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-10 items-start mt-7 text-sm font-bold tracking-wide text-white uppercase">
              <button className="gap-2 self-stretch px-24 py-4 rounded-sm bg-neutral-700 min-w-60 w-[321px] max-md:px-5">
                Add to Basket
              </button>
              <button aria-label="Add to favorites">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb60f4c7aaea8dc0fabec2890e58b58bea84b7a?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
                  className="object-contain shrink-0 w-11 rounded-none aspect-square"
                  alt="Heart icon"
                />
              </button>
            </div>

            <ShippingInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
