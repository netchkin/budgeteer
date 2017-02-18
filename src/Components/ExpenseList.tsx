import * as React from 'react';
import {Component} from 'react';
import ExpenseListItem from './ExpenseListItem';
import {observer} from 'mobx-react';
import ObservableExpenseStore from './../Stores/ObservableExpenseStore'
import Expense from './../Domain/Expense';

export interface ExpenseListProps { store: ObservableExpenseStore }

@observer
class ExpenseList extends Component<ExpenseListProps, undefined> {
  render() {
    const store = this.props.store;
    return (
      <div>
      {
        store.expenses.values().map((e: Expense)=>
          <ExpenseListItem key={e.id} expense={e} onDelete={() => store.removeExpense(e.id)} />
        )
      }
      </div>
    )
  }
}

export default ExpenseList;