import React, { useState, useEffect } from "react";
import SimpleBarReact from "simplebar-react";
import { api } from "../api/api";
import Result from "./Result";
import { ReactComponent as DropdownIcon } from "../assets/dropdown-icon.svg";

import "simplebar/src/simplebar.css";

function Dropdown() {
  const [selectedCurrency, setSelectedCurrency] = useState({
    curr: {
      id: 0,
      currency: "USD",
      imageSrc: require("../assets/USD.png"),
    },
  });
  const [amount, setAmount] = useState();
  const [rateResult, setRateResult] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // get rates
    api
      .getTicker(selectedCurrency.curr.currency)
      .then((res) => {
        let data = res.filter(
          (el) => el.currency === selectedCurrency.curr.currency
        );
        setRateResult(data);
      })
      .catch((err) => console.log(err));
  }, [selectedCurrency.curr.currency]);

  // currency convertion options
  const options = [
    {
      id: 0,
      currency: "USD",
      imageSrc: require("../assets/USD.png"),
    },
    {
      id: 1,
      currency: "EUR",
      imageSrc: require("../assets/EUR.png"),
    },
    {
      id: 2,
      currency: "BAT",
      imageSrc: require("../assets/BAT.png"),
    },
    {
      id: 3,
      currency: "BTC",
      imageSrc: require("../assets/BTC.png"),
    },
    {
      id: 4,
      currency: "BCH",
      imageSrc: require("../assets/BCH.png"),
    },
    {
      id: 5,
      currency: "CNY",
      imageSrc: require("../assets/CNY.png"),
    },
    {
      id: 6,
      currency: "ETH",
      imageSrc: require("../assets/ETH.png"),
    },
    {
      id: 7,
      currency: "GBP",
      imageSrc: require("../assets/GBP.png"),
    },
  ];

  // set selected currency
  const setSelectedItem = (id) => {
    const found = options.find((el) => el.id === id);

    setSelectedCurrency({
      ...selectedCurrency,
      curr: {
        id: found.id,
        currency: found.currency,
        imageSrc: found.imageSrc,
      },
    });

    setDropdownOpen(!dropdownOpen);
  };

  // filter fetched data by pair
  const filteredResult =
    amount &&
    rateResult.filter((rate) => {
      return options
        .filter((option) => option.currency !== selectedCurrency.curr.currency)
        .find(
          (option) =>
            rate.pair === option.currency + selectedCurrency.curr.currency
        );
    });

  // it prevents unnecessary re-rendering
  let timer;
  let debounce = function (func, delay) {
    // cancels the setTimeout method execution
    clearTimeout(timer);

    // executes the func after delay time.
    timer = setTimeout(func, delay);
  };

  // get and set entered value
  const handleInputOnChange = (e) => {
    e.persist();

    debounce(() => {
      setAmount(e.target.value);
    }, 300);
  };

  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id="price"
          className="appearance-none block text-4xl lg:text-5xl w-full h-20 bg-gray-100 text-gray-700 rounded pl-5 py-4 px-4 mb-3 leading-relaxed focus:outline-none focus:bg-gray-300"
          placeholder="0.00"
          type="number"
          onChange={(e) => handleInputOnChange(e)}
        ></input>

        <div className="absolute inset-y-0 right-0 mr-4 flex items-center">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex items-center justify-center w-full rounded-full font-semibold px-4 py-2 bg-white text-md leading-5 text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                className="w-6 h-6 mr-2"
                src={selectedCurrency.curr.imageSrc}
                alt="currency-thumbnail"
              ></img>
              <span className="">{selectedCurrency.curr.currency}</span>
              <DropdownIcon className="-mr-1 ml-1" />
            </button>

            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg border-0 z-10">
                <div className="rounded-md bg-white border-0">
                  <SimpleBarReact style={{ maxHeight: 170 }}>
                    <div
                      className=""
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {options.map((item, i) => (
                        <span
                          className="flex items-center px-4 py-3 text-md leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 font-semibold cursor-pointer"
                          role="menuitem"
                          id={item.id}
                          key={i}
                          onClick={() => setSelectedItem(item.id)}
                        >
                          <img
                            className="w-6 h-6 mr-2"
                            src={item.imageSrc}
                            alt="currency-thumbnail"
                          ></img>
                          {item.currency}
                        </span>
                      ))}
                    </div>
                  </SimpleBarReact>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-wrap mt-2">
        {amount ? (
          rateResult &&
          filteredResult.map((item, i) => (
            <Result key={i} pair={item.pair} amount={amount} bid={item.bid} />
          ))
        ) : (
          <div className="text-center pt-5 text-gray-500">
            <span className="">Enter an amount to check the rates.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
