import React from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random() };
    props.onSaveExp(expenseData);
  };
  return (
    <div>
      <NewExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
