import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <div className="relative flex flex-col items-center flex-1 p-4 mx-2 my-4 border-l-8 border-r-8 border-purple-600 rounded-lg shadow-xl bg-gradient-to-bl from-purple-200 via-gray-100 to-purple-200 sm:flex-row sm:mb-0 sm:justify-between sm:w-9/12">
      <div className="flex items-center ">
        <ExpenseDate date={date} />
      </div>
      <div className="mb-2 text-2xl font-bold text-purple-900 sm:mb-0">
        <h1>{title}</h1>
      </div>
      <div>
        <h3 className="px-3 py-1 mb-2 font-bold text-white bg-black border-2 border-gray-600 rounded-lg sm:mb-0">
          ${amount}
        </h3>
      </div>
    </div>
  );
};

export default ExpenseItem;
