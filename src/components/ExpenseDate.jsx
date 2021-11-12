const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="flex flex-col items-center px-4 py-2 mb-4 text-sm font-bold text-white bg-black border-4 border-purple-400 rounded-lg sm:mb-0 sm:w-24">
      <h2>{day}</h2>
      <h2>{month}</h2>
      <h2>{year}</h2>
    </div>
  );
};

export default ExpenseDate;
