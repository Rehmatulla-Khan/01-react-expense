import React from "react";

const ExpenseFilter = ({ onChangrFilter, filteredYear }) => {
  const dropDownChangeHandler = (event) => {
    onChangrFilter(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <label className="p-2 text-xl" htmlFor="filter">
        Filter by Years
      </label>
      <select
        className="w-24 px-2 py-1 m-auto text-center text-white bg-purple-500 rounded-lg"
        value={filteredYear}
        onChange={dropDownChangeHandler}
      >
        <option value="All">All</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
