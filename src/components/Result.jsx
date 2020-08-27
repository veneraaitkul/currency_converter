import React from "react";

export default function Result(props) {
  // calc result
  let currencyConverted = props.amount > 0 ? props.amount * props.rate : 0;

  return (
    <div className="flex relative pt-2 text-gray-700 font-medium">
      <div className="w-2/3 md:w-3/4 lg:w-3/4 h-12 text-left pl-6">
        <span className="text-2xl">
          {currencyConverted.toFixed(6).toString()}
        </span>
      </div>
      <div className="w-1/3 md:w-1/4 lg:w-1/4 h-12 flex items-center md:pl-12 lg:pl-8 -mt-2">
        <img
          className="w-6 h-6 mr-2"
          src={require(`../assets/${props.currency}.png`)}
          alt="currency-thumbnail"
        ></img>
        <span className="">{props.currency}</span>
      </div>
    </div>
  );
}
