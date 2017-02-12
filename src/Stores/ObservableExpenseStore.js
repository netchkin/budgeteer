import {observable, computed} from 'mobx';

class ObservableExpenseStore {
  @observable expenses = [
    { title: "potraviny", value: "100" },
    { title: "struny", value: "300" }
  ];

  @computed get getExpenses() {
    return this.expenses.concat([]);
  }

  addExpense(expense) {
    this.expenses.push(expense);
  }
}

const observableExpenseStore = new ObservableExpenseStore();
export default observableExpenseStore;