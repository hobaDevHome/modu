import React from "react";

const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-5 justify-center mt-10 max-md:flex-col max-md:items-center max-sm:flex-col">
      <button className="text-xl font-medium text-white uppercase rounded bg-neutral-700 h-[76px] shadow-[0px_7px_30px_rgba(0,0,0,0.05)] w-[247px] max-md:w-4/5 max-sm:w-full max-sm:h-[60px] flex items-center justify-center">
        Regenerate
      </button>
      <button className="text-xl font-medium text-white uppercase rounded bg-neutral-700 h-[76px] shadow-[0px_7px_30px_rgba(0,0,0,0.05)] w-[247px] max-md:w-4/5 max-sm:w-full max-sm:h-[60px] flex items-center justify-center">
        Customize this!
      </button>
    </div>
  );
};

export default ActionButtons;
