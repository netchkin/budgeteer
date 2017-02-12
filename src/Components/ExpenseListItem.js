// @flow

import React from 'react';

export default ({ expense, onDelete }: { expense: {title: string, id: string, value: number}, onDelete: {(): void}}) => {
  return (
    <div>
      <div>{expense.title}<i onClick={onDelete}>X</i></div>
      <span>value</span><span>{expense.value}</span>
    </div>);
};