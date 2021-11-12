import React from "react";
import ExpenseItem from "./ExpenseItem";
import Icon from "../svg/icon";

const ExpenseDataList = (props) => {
  if (props.expenseData.length > 0) {
    return (
      <div className="w-full p-1 m-2 sm:flex sm:flex-col sm:items-center">
        {props.expenseData.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center p-4 mb-20 bg-purple-200">
        <div>
          <div className="mb-4 text-center ">
            <h1 className="text-2xl font-bold text-purple-900">Oops!!!</h1>
            <h1 className="text-xl font-bold text-purple-800">
              No Expense Found
            </h1>
          </div>
          <div className="flex justify-center animate-spin-slow">
            <Icon />
          </div>
        </div>
      </div>
    );
  }
};

export default ExpenseDataList;
