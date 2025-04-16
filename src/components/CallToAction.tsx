import * as React from "react";

const CallToAction: React.FC = () => {
  return (
    <>
      <p className="mt-20 text-xl text-cyan-800 max-md:mt-10 max-md:max-w-full">
        Explore our tools now and see how your ideas come to life.
      </p>
      <button className="px-6 pt-6 pb-10 mt-8 max-w-full text-xl font-medium text-center text-white uppercase bg-cyan-800 rounded shadow-lg w-[247px] max-md:px-5">
        START Customizing
      </button>
    </>
  );
};

export default CallToAction;
