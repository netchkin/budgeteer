import React, {Component} from 'react';
import ExpenseList from './ExpenseList';

class Expenses extends Component {
  foo = () => {
    alert(1);
  }

  handleAddExpense = () => {
    this.foo();
    this.props.store.addExpense(this.refs.txtExpense.value);
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