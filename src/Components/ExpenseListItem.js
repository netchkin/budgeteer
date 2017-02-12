// @flow

import React from 'react';

export default ({ expense, onDelete }: { expense: {title: string, id: string, value: number}, onDelete: {(x: string): void}}) => {
  return (
    <div>
      <div>{expense.title}<i onClick={onDelete(expense.id)}>X</i></div>
      <span>value</span><span>{expense.value}</span>
    </div>);
};