import * as React from 'react';
import {Component} from 'react';

import DevTools from 'mobx-react-devtools';

//import logo from './logo.svg';

import AppBar from './Components/AppBar';
import ExpenseReports from './Components/ExpenseReports';
import Expenses from './Components/Expenses';
import Panel from './Components/Panel';
import ObservableExpenseStore from './Stores/ObservableExpenseStore';

const observableExpenseStore = new ObservableExpenseStore();

class App extends Component<undefined, undefined> {
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
        <DevTools />
      </div>
    )
  }
}

export default App;
