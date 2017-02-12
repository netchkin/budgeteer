// @flow

import React, {Component} from 'react';
import ExpenseListItem from './ExpenseListItem';
import {observer} from 'mobx-react';

@observer
class ExpenseList extends Component {
  render() {
    const store = this.props.store;
    return (
      <div>
      {
        store.expenses.values().map(e=><ExpenseListItem key={e.id} expense={e} onDelete={() => store.removeExpense(e.id)} />)
      }
      </div>
    )
  }
}

export default ExpenseList;