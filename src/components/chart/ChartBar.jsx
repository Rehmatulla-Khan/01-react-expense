import React from "react";

const Chartbar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col justify-end w-4 h-full overflow-hidden bg-purple-200 border-2 border-black rounded-lg">
        <div
          className="w-full transition-all duration-300 ease-out bg-purple-500"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="ml-1 text-xs font-bold text-center">{props.label}</div>
    </div>
  );
};

export default Chartbar;
