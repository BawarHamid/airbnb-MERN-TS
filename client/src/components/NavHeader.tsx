import React from "react";
import { Link } from "react-router-dom";

const svgStyleNavBarLogo = {
  fill: "#FF385C", // Red fill color for the svg
};

const svgStyleBtnLogo = {
  fill: "#FFFFFF", // Red fill color for the svg
};

const NavHeader: React.FC = () => {
  return (
    <>
      <header className="p-4 flex justify-between">
        <a href="" className="flex items-center gap-1 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            style={svgStyleNavBarLogo}
            className="h-9 w-9"
          >
            <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
          </svg>
          <span className="font-bold text-xl">BeHome's</span>
        </a>
        <div className="flex border border-red-700 rounded-full py-2 px-4 gap-2 shadow-md shadow-red-200">
          <div>Hvilken lokation?</div>
          <div className="border-l border-red-300" />
          <div>Hvornår?</div>
          <div className="border-l border-red-300" />
          <div>Tilføj gæster?</div>
          <button className="bg-primary-red p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={svgStyleBtnLogo}
              className="h-3"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>

        <Link
          to={"/login"}
          className="flex border items-center border-red-700 rounded-full py-2 px-4 gap-3 shadow-md shadow-red-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={svgStyleNavBarLogo}
            className="h-4"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>

          {/* <button className="bg-gray-600 px-2 rounded-full"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-7"
            style={svgStyleNavBarLogo}
          >
            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
          </svg>
          {/* </button> */}
        </Link>
      </header>
    </>
  );
};

export default NavHeader;
