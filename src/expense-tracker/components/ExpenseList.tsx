interface Expense {
  // need an interface to define shape of each expense; each expense object needs a few properties:
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  // property name: property type (each expense is an object); property type is array of expense objects
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {

  if (expenses.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          {/* in JS, all arrays have a reduce method that iterates over our array of expenses; with each iteration runs arrow function to combine all expense objects into a number which is the total */}
          {/* pass an arrow function with 2 parameters, 1st parameter is acc which is short for accumulator, a variable that holds the total amount, 2nd parameter is an expense object  */}
          {/* in body of arrow function, as 1st argument, we need to get the amount of the current expense and add it to the accumulator, as 2nd argument to the reduce method, we pass initial value of accumulator = 0  */}
          {/* returns a number, after we call .reduce method we call the medhod .toFixed(2) which specifies 2 digits after decimal point  */}
          <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
