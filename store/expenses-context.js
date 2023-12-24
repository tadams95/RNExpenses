import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Nikes",
    amount: 29.99,
    date: new Date("2023-12-10"),
  },
  {
    id: "e2",
    description: "Chucks",
    amount: 39.99,
    date: new Date("2023-12-01"),
  },
  {
    id: "e3",
    description: "Doc Martens",
    amount: 59.99,
    date: new Date("2023-11-22"),
  },
  {
    id: "e4",
    description: "Shein",
    amount: 25.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e5",
    description: "Earrings",
    amount: 120.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e6",
    description: "Nikes",
    amount: 29.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e7",
    description: "Chucks",
    amount: 39.99,
    date: new Date("2023-12-22"),
  },
  {
    id: "e8",
    description: "Doc Martens",
    amount: 59.99,
    date: new Date("2023-12-22"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
