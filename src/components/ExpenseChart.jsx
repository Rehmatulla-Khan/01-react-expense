import React from "react";
import Chart from "./chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoint = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ].map((month) => ({ label: month, value: 0 }));

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoint[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoint} />;
};

export default ExpenseChart;
