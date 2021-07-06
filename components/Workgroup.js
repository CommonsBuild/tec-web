import React from "react";

import useWindowSize from "../utils/useWindowSize";

const Workgroup = ({ wg }) => {
  const windowSize = useWindowSize();

  // No hover on small screens, iPads etc
  const hoverEnable = () => {
    if (windowSize.width >= 1024) return true;
    return false;
  };

  // Shrink font on long names
  const nameSize = () => {
    const parts = wg.name.split(" ");
    for (let part of parts) {
      if (part.length > 10) return "text-4xl";
    }
    return "text-5xl";
  };

  return (
    <div className="relative text-white font-inter">
      <div
        className={`${
          hoverEnable()
            ? "transition duration-500 ease-in-out opacity-0 hover:opacity-100"
            : ""
        } flex flex-col justify-between h-48 w-full p-5 text-sm tec-text-bg-unicorn-2 rounded-3xl  tec-wg-desc`}
      >
        <div className="mb-2">{wg.description}</div>
        <div className="flex flex-row items-center justify-between space-x-4">
          <div className="">
            Steward: <b>{wg.steward}</b>{" "}
            <img
              src={wg.stewardImg}
              alt={wg.steward}
              width="40"
              height="40"
              className="inline-block align-middle"
            />
          </div>
          <div className="text-center">
            {wg.calendarText}
            <br />
            <a href={wg.calendarUrl} target="_blank">
              Add to calendar
            </a>
          </div>
        </div>
      </div>

      {hoverEnable() ? (
        <div className="absolute top-0 left-0 w-full h-48 p-2 text-sm text-center transition duration-500 ease-in-out pointer-events-none wg-title tec-text-bg-unicorn-1">
          <div className="flex flex-row items-center justify-start h-full space-x-5 bg-black">
            <img src={wg.wgImg} className="inline-block w-24 h-24 ml-5" />
            <div
              className={`${nameSize()} inline-block text-left uppercase tec-text-outline-unicorn-4`}
            >
              {wg.name}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Workgroup;
