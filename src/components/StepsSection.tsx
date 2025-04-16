import * as React from "react";
import CustomizationStep from "./CustomizationStep";

const StepsSection: React.FC = () => {
  return (
    <>
      <section className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[33%] max-md:ml-0 max-md:w-full">
            <CustomizationStep
              number="1"
              title={
                <>
                  <span style={{ fontSize: "27px" }}>Describe Your Idea</span>
                  <br />
                  <br />
                </>
              }
              description="Use the text box provided to type in a detailed description of what you're looking for. Be as creative and specific as possible—our design tool will bring your idea to life!"
              className="pb-36"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <CustomizationStep
              number="2"
              title="Generate Your Product"
              description={
                <>
                  Click the &quot;Generate&quot; button to see instant
                  visualizations of your idea. Our smart design engine will
                  produce options based on your input.
                </>
              }
              className="pb-40"
            />
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <CustomizationStep
              number="3"
              title="Explore Your Options"
              description="Review the products generated for you. Scroll through the options and pick the one that feels just right for you."
              className="pb-40"
            />
          </div>
        </div>
      </section>

      <section className="self-start mt-6 max-w-full w-[854px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <CustomizationStep
              number="4"
              title="Customize Further (Optional)"
              description={
                <>
                  Want to tweak it even more? Click the &quot;Customize
                  This&quot; button under your chosen design. Adjust colors,
                  dimensions, and details to match your vision perfectly.
                </>
              }
              className="pb-36"
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <CustomizationStep
              number="5"
              title="Finalize and Order"
              description={
                <>
                  Once you're satisfied with your design:
                  <br />
                  Add it to your cart.
                  <br />
                  Proceed to checkout.
                  <br />
                  Sit back and relax while we craft your personalized
                  masterpiece.
                </>
              }
              className="pb-32 px-20"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StepsSection;
