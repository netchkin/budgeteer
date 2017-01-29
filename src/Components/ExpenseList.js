import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class ExpenseList extends Component {
  render() {
    const store = this.props.store;
    return (
      <div>
      {
        store.expenses.map(e=><div>{e}</div>)
      }
      </div>
    )
  }
}

export default ExpenseList;