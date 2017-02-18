import * as React from 'react';
import Expense from './../Domain/Expense'

export interface ExpenseListItemProps { expense: Expense, onDelete: {(): void} }
export default ({ expense, onDelete }: ExpenseListItemProps) => {
  return (
    <div>
      <div>{expense.title}<i onClick={onDelete}>X</i></div>
      <span>value</span><span>{expense.value}</span>
    </div>);
};