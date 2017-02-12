// @flow

import React, {Component} from 'react';
import ExpenseList from './ExpenseList';

class Expenses extends Component {
  handleAddExpense = () => {
    this.props.store.addExpense({
      id: this.refs.txtExpenseDescription.value + this.refs.txtExpenseAmount.value,
      title: this.refs.txtExpenseDescription.value,
      value: this.refs.txtExpenseAmount.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <input ref="txtPlusOrMinus" type="text" />        
          <input ref="txtExpenseDescription" type="text" />
          <input ref="txtExpenseAmount" type="text" />
          <button onClick={this.handleAddExpense}>+</button>
        </div>
        <ExpenseList store={this.props.store} />
      </div>
    )
  }
}

export default Expenses;