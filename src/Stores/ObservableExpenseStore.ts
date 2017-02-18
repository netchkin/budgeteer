import {observable, IMapEntries, ObservableMap } from 'mobx';
import Expense from './../Domain/Expense';

let initialData: [string, Expense][] = [
    { title: "groceries", value: 100, id: "1" },
    { title: "strings", value: 300, id: "2" }].map<[string, Expense]>(item => [item.id, item]);

class ObservableExpenseStore {
  @observable expenses = new ObservableMap<Expense>(initialData);

  addExpense(expense: Expense) {
    this.expenses.set(expense.id, expense);
  }

  removeExpense(id: string): void {
    this.expenses.delete(id);
  }
}

export default ObservableExpenseStore;