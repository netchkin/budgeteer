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
        store.expenses.map(e=><ExpenseListItem expense={e} onDelete={function(){}} />)
      }
      </div>
    )
  }
}

export default ExpenseList;