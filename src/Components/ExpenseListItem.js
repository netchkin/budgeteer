// @flow

import React from 'react';

const ExpenseListItem = ({ expense, onDelete }: { expense: {title: string, id: string, value: number}, onDelete: {(): void}}) => {
  return (
    <div>
      <div>{expense.title}<i onClick={onDelete}>X</i></div>
      <span>value</span><span>{expense.value}</span>
    </div>);
};

ExpenseListItem.propTypes = {
  expense: React.PropTypes.shape({
    id: React.PropTypes.string,
    value: React.PropTypes.string,
    title: React.PropTypes.string
  }).isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default ExpenseListItem;