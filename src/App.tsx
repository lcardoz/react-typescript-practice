import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 10, category: "Utilities" },
    { id: 2, description: "def", amount: 10, category: "Utilities" },
    { id: 3, description: "ghi", amount: 10, category: "Utilities" },
    { id: 4, description: "jkl", amount: 10, category: "Utilities" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((expense) => expense.id !== id))}
      />
    </>
  );
}

export default App;
