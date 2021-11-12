import React, { useState } from "react";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // __________________USING 1 STATE________________
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // __________________USING 1 STATE________________
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //______________USE THIS WHENEVER WE DEPEND ON PREVIOUS STATE______________
    // setUserInput((preVal) => {
    //   return { ...preVal, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // __________________USING 1 STATE________________
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // __________________USING 1 STATE________________
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-center w-full p-4 sm:w-9/12 sm:m-auto"
    >
      <div className="w-full p-6 border-l-8 border-r-8 border-purple-600 rounded-lg shadow bg-gradient-to-bl from-purple-200 via-gray-100 to-purple-200">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative p-1 transition-all duration-500 border-2 border-gray-400 rounded focus-within:border-purple-500 focus-within:text-purple-500">
            <div className="absolute px-1 -mt-4 text-xs tracking-wider uppercase">
              <label className="px-1 font-semibold text-gray-600 bg-white">
                Title *
              </label>
            </div>

            <input
              value={enteredTitle}
              onChange={titleChangeHandler}
              type="text"
              className="block w-full h-full text-purple-800 outline-none"
            />
          </div>
          <div className="relative p-1 transition-all duration-500 border-2 border-gray-400 rounded focus-within:border-purple-500 focus-within:text-purple-500">
            <div className="absolute px-1 -mt-4 text-xs tracking-wider uppercase">
              <label className="px-1 font-semibold text-gray-600 bg-white">
                Amount *
              </label>
            </div>

            <input
              value={enteredAmount}
              onChange={amountChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
              className="block w-full h-full px-1 py-1 outline-none"
            />
          </div>
          <div className="relative p-1 transition-all duration-500 border-2 border-gray-400 rounded focus-within:border-purple-500 focus-within:text-purple-500">
            <div className="absolute px-1 -mt-4 text-xs tracking-wider uppercase">
              <label className="px-1 font-semibold text-gray-600 bg-white">
                Date *
              </label>
            </div>

            <input
              value={enteredDate}
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              className="block w-full h-full px-1 py-1 outline-none"
            />
          </div>
        </div>
        <div className="flex justify-center pt-3 mt-6 border-t border-gray-400">
          <button
            className="px-3 py-1 text-gray-100 transition-all duration-300 bg-purple-500 border-2 border-gray-400 rounded-lg hover:shadow-inner hover:bg-purple-700"
            type="submit"
          >
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
