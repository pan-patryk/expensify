import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses' , () =>{
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
})
test('should correcly add up a single expense' , () =>{
    const total = getExpensesTotal([expenses[2]]);
    expect(total).toBe(4500);
})
test('should return add multuple expenses' , () =>{
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
})