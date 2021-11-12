import ExpenseDataList from "./ExpenseDataList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expense = ({ expData, onFilteredYear, filteredYear }) => {
  const filterChangeHandler = (selectedYear) => {
    onFilteredYear(selectedYear);
  };

  return (
    <div className="w-full">
      <div>
        <ExpenseChart expenses={expData} />
      </div>
      <div className="text-center">
        <ExpenseFilter
          filteredYear={filteredYear}
          onChangrFilter={filterChangeHandler}
        />
      </div>
      <ExpenseDataList expenseData={expData} />
    </div>
  );
};

export default Expense;
