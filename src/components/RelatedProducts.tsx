import React from "react";

const RelatedProducts: React.FC = () => {
  return (
    <section className="self-center mt-28 ml-10 max-w-full w-[900px] max-md:mt-10">
      <h3 className="text-2xl font-medium tracking-wide text-gray-800">
        Customers also bought these
      </h3>
      <div className="flex flex-wrap gap-3.5 items-start mt-7 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64614391184c2b0217cd000125bc8b7c11835758?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
          className="object-contain shrink-0 aspect-[0.79] w-[215px]"
          alt="Related product 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d6c8e289b1f7c898da47f259e7fe8a8f682f656?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
          className="object-contain shrink-0 aspect-[0.79] w-[215px]"
          alt="Related product 2"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/03d4342f71ef7c227a606b5ee8de158ef55be618?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
          className="object-contain shrink-0 aspect-[0.79] w-[215px]"
          alt="Related product 3"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8343f44c0733c151c06aa1a271e1c68fca81cc3c?placeholderIfAbsent=true&apiKey=60a3aebf167746598db9fb9b5b703ebc"
          className="object-contain shrink-0 aspect-[0.79] w-[215px]"
          alt="Related product 4"
        />
      </div>
    </section>
  );
};

export default RelatedProducts;
