import {observable, computed} from 'mobx';

class ObservableExpenseStore {
  @observable expenses = [];

  @computed get getExpenses() {
    return this.expenses.concat([]);
  }

  addExpense(expense) {
    this.expenses.push(expense);
  }
}

const observableExpenseStore = new ObservableExpenseStore();
export default observableExpenseStore;