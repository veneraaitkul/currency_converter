import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div>
      <div className="container mx-auto pl-8 pr-8 lg:pr-0 lg:pl-0 border-t-2 border-gray-200 pt-12">
        <div className="flex flex-wrap mb-16 w-full">
          <div className="w-full w-1/2 md:w-1/2 lg:w-1/6 md:mb-2 pt-5 mb-8 lg:mb-0 ">
            <img src={logo} alt="Logo" />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 text-sm tracking-wide mb-4 lg:mb-0">
            <p className="font-medium py-4">Products</p>
            <ul className="font-normal text-gray-600">
              <li className="mb-2">Consumers</li>
              <li className="mb-2">Business</li>
              <li className="mb-2">Partners</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 text-sm tracking-wide mb-4 lg:mb-0">
            <p className="font-medium py-4">Company</p>
            <ul className="font-normal text-gray-600">
              <li className="mb-2">About</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Press</li>
              <li className="mb-2">Blog</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 text-sm tracking-wide mb-4 lg:mb-0">
            <p className="font-medium py-4">Help</p>
            <ul className="font-normal text-gray-600">
              <li className="mb-2">FAQ &amp; Support</li>
              <li className="mb-2">Platform Status</li>
              <li className="mb-2">Criptionary</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Legal</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6 text-sm tracking-wide mb-4 lg:mb-0">
            <p className="font-medium py-4">Social</p>
            <ul className="font-normal text-gray-600">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Twitter</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">Linkedin</li>
            </ul>
          </div>

          <div className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/6 text-sm tracking-wide">
            <div className="mb-6">
              <svg
                className="fill-current inline-block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.6 12.7c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.3-4.4-2.4-1.8-.2-3.6 1.1-4.6 1.1-1 0-2.4-1.1-3.9-1.1-2 0-3.9 1.2-4.9 3-2.1 3.7-.5 9.1 1.5 12 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 3.9-1 1.8 0 2.3 1 3.9.9 1.6 0 2.7-1.5 3.6-2.9 1.2-1.7 1.6-3.3 1.7-3.4 0 .2-3.2-1-3.2-4.6m-3-8.9c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.7.8-3.5 1.8-.8.9-1.4 2.3-1.3 3.7 1.4.1 2.8-.7 3.6-1.7"
                  fill="#bccad8"
                ></path>
              </svg>

              <svg
                className="fill-current inline-block h-6 w-6 ml-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g>
                  <path
                    d="M21.9 10.7c1.3.7 1.3 1.9 0 2.6L3.4 23.7c-1.3.7-2.4.1-2.4-1.3V1.7C1 .2 2.1-.4 3.4.4l18.5 10.3z"
                    fill="#bccad8"
                  ></path>
                  <path
                    d="M17.1 16L3.4 23.7c-.8.5-1.6.4-2-.1L13 11.9l4.1 4.1z"
                    fill="#8794a3"
                  ></path>
                  <path
                    d="M13 11.9L1.5.4c.4-.5 1.1-.5 2-.1L17 7.9l-4 4z"
                    fill="#e5eaf1"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="relative w-24">
              <select
                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-gray-200 focus:border-gray-500"
                id="grid-state"
              >
                <option>English</option>
                <option>Português</option>
                <option>Руский</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-xs tracking-wider">
          <p className="mb-4 lg:mb-2 leading-5">
            It's just an invented adress because why not.
          </p>
          <div className="lg:flex mb-16 lg:mb-24">
            <p className="lg:flex-initial pr-2">
              &copy; Invented Company, Inc. 1984. All Rights Obviously Not
              Reserved.
            </p>
            <span className="lg:flex-initial mx-2 border-b-2">Agreements</span>
            <span className="lg:flex-initial mx-2 border-b-2">
              Privacy &amp; Data Policy
            </span>

            <span className="lg:flex-initial mx-2 border-b-2">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
