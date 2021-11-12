import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="flex justify-center">
      <div className="flex justify-around w-full h-40 p-4 mt-4 text-center bg-purple-100 rounded-lg shadow-xl sm:w-9/12 sm:h-56">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
