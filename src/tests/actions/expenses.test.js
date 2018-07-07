import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const uid = "12345sadasd";
const defaultAuthState={ auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt
    };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should remove expense from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startRemoveExpense({ id: expenses[0].id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id: expenses[0].id
      });
      return database
        .ref(`users/${uid}expences/${expenses[0].id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBe(null);
      done();
    });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value"
    }
  });
});

test("should update expense in firebase", done => {
  const { id, createdAt, note, amount } = expenses[1];
  const store = createMockStore(defaultAuthState);
  store
    .dispatch(startEditExpense(id, { description: "update" }))
    .then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: "EDIT_EXPENSE",
        id: id,
        updates: {
          description: "update"
        }
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual({
        description: "update",
        createdAt: createdAt,
        note: note,
        amount: amount
      });
      done();
    });
});

test("should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenses[2]
    }
  });
});

test("should add expense to database and store", done => {
  const dataToInput = {
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
  };
  const store = createMockStore(defaultAuthState);

  store
    .dispatch(startAddExpense(dataToInput))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...dataToInput
        }
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(dataToInput);
      done();
    });
});

test("should add expense with defaults to database and store", done => {
  const defaultExpenseValues = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  const store = createMockStore(defaultAuthState);

  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...defaultExpenseValues
        }
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultExpenseValues);
      done();
    });
});

test("should set up set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch the expenses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});
