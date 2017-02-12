import React from 'react';

export default ({ expense, onDelete }) => {
  return (
    <div>
      <div>{expense.title}<i onClick={onDelete(expense.id)}>X</i></div>
      <span>value</span><span>{expense.value}</span>
    </div>);
};