import React from "react";
import Calculator from "./Calculator";

function Content() {
  return (
    <div className="container mx-auto pt-16 lg:pt-32 w-10/12 h-screen mb-40 lg:mb-24">
      <div className="lg:w-5/12 mx-auto">
        <div>
          <p className="text-center font-semibold text-5xl tracking-tight text-gray-600">
            Currency Converter
          </p>

          <p className="text-center font-regular text-2xl text-gray-500 mt-5">
            Receive competitive and transparent pricing with no hidden spreads.
            See how we compare.
          </p>
        </div>

        <div className="pt-16">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default Content;
