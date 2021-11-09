import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expense = ({ expData, onFilteredYear, filteredYear }) => {
  const filterChangeHandler = (selectedYear) => {
    onFilteredYear(selectedYear);
  };
  return (
    <div className="w-full">
      <div className="text-center">
        <ExpenseFilter
          filteredYear={filteredYear}
          onChangrFilter={filterChangeHandler}
        />
      </div>
      <div className="w-full p-1 m-2 sm:flex sm:flex-col sm:items-center">
        {expData.map((item) => {
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
    </div>
  );
};

export default Expense;
