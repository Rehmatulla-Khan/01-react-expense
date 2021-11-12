import Expense from "./Expense";
import { expenses } from "../components/data/expenseData";
import NewExpense from "./newExpense/NewExpense";
import { useState } from "react/cjs/react.development";

const App = () => {
  const [data, setData] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState("All");
  const [filteredExpData, setFilteredExpData] = useState(data);

  const addExpenseHandler = (expenseData) => {
    const expData = [expenseData, ...data];
    setData(expData);
    setFilteredExpData(expData);
    // setData((previous) => [expenseData, ...previous]);
  };

  const onFiteredYear = (selectedYear) => {
    if (selectedYear === "All") {
      setFilteredExpData(data);
    } else {
      setFilteredExpData(
        data.filter((exp) => {
          return exp.date.getFullYear() === +selectedYear;
        })
      );
    }
    setFilteredYear(selectedYear);
  };

  return (
    <div className="bg-purple-200">
      <div>
        <NewExpense onSaveExp={addExpenseHandler} />
      </div>
      <div className="flex justify-center">
        <Expense
          onFilteredYear={onFiteredYear}
          expData={filteredExpData}
          filteredYear={filteredYear}
        />
      </div>
    </div>
  );
};

export default App;
