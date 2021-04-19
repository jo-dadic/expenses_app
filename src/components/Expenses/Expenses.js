import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //.filter() vraća novi array. filter prođe kroz naš array, usporedi uvjete i sprema i vraća novi array samo sa elementima koji su zadovoljili uvjete:
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // we can store JSX content into variables and use it later!!!
  let expensesContent = <p>No expenses found!</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChanged={filterChangeHandler}
        />
        {expensesContent}
        {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })} */}
      </Card>
    </div>
  );
};

export default Expenses;
