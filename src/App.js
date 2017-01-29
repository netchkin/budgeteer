import React, {Component} from 'react';
//import logo from './logo.svg';

import AppBar from './Components/AppBar';
import ExpenseReports from './Components/ExpenseReports';
import Expenses from './Components/Expenses';
import Panel from './Components/Panel';
import observableExpenseStore from './Stores/ObservableExpenseStore';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <div>Budgeteer</div>  
        </AppBar>
        <Panel>
          <Expenses store={observableExpenseStore} />
        </Panel>
        <Panel>
          <ExpenseReports />
        </Panel>
      </div>
    )
  }
}

export default App;
