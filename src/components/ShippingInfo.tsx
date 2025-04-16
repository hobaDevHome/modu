import React from "react";

const ShippingInfo: React.FC = () => {
  return (
    <div className="z-10 mt-12 max-w-full text-sm font-semibold tracking-wide text-gray-800 w-[403px] max-md:mt-10">
      <div className="flex flex-col justify-center items-center px-3 py-6 w-full bg-gray-100 rounded">
        <div>
          <div className="flex gap-3 items-start">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfbaa61d546c72b380b615255d73b1f920218aec?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
              className="object-contain shrink-0 aspect-square w-[17px]"
              alt="Shipping icon"
            />
            <div className="w-[340px]">
              Free Shipping <br />
              <span className="font-normal text-gray-500">
                Free standard shipping on orders over 700 EGP
              </span>
              <br />
              <span className="font-normal text-gray-500">
                Estimated to be delivered on 30/12/2024 - 03/01/2025.
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-start mt-4 max-w-full w-[117px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1f54bdfc1e482e47a690c4d3b49370c0b439ef?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
              className="object-contain shrink-0 aspect-square w-[17px]"
              alt="Return policy icon"
            />
            <div className="w-[98px]">
              Return Policy
              <br />
              <span className="font-normal underline text-gray-500">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
