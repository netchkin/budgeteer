// @flow

import {observable, IMapEntries, map } from 'mobx';

// TODO: export?
type Expense = { title: string, value: number, id: string };

class ObservableExpenseStore {
  @observable expenses: IMapEntries<Expense> = new map([
    { title: "groceries", value: 100, id: "1" },
    { title: "strings", value: 300, id: "2" }].map(item => [item.id, item]));

  addExpense(expense: Expense) {
    this.expenses.set(expense.id, expense);
  }

  removeExpense(id: string): void {
    this.expenses.delete(id);
  }
}

export default ObservableExpenseStore;