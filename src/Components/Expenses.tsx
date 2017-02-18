import * as React from 'react';
import {Component} from 'react';
import ExpenseList from './ExpenseList';
import ObservableExpenseStore from './../Stores/ObservableExpenseStore'

export interface ExpensesProps {
  store: ObservableExpenseStore;
}

class Expenses extends Component<ExpensesProps, undefined> {
  ctrls : {
    txtPlusOrMinus: HTMLInputElement,
    txtExpenseDescription: HTMLInputElement,
    txtExpenseAmount: HTMLInputElement
  }

  handleAddExpense = () => {
    this.props.store.addExpense({
      id: this.ctrls.txtExpenseDescription.value + this.ctrls.txtExpenseAmount.value,
      title: this.ctrls.txtExpenseDescription.value,
      value: Number(this.ctrls.txtExpenseAmount.value)
    });
  }

  render() {
    return (
      <div>
        <div>
          <input ref={(input) => this.ctrls.txtPlusOrMinus = input} type="text" />        
          <input ref={(input) => this.ctrls.txtExpenseAmount = input} type="text" />
          <input ref={(input) => this.ctrls.txtExpenseDescription = input} type="text" />
          <button onClick={this.handleAddExpense}>+</button>
        </div>
        <ExpenseList store={this.props.store} />
      </div>
    )
  }
}

export default Expenses;