import authReducer from "../../reducers/auth";

test("should set uid in state on login action", () => {
  const action = {
    type: "LOGIN",
    uid: "1234"
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid: action.uid });
});

test("should clear state on logout action", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "1234" }, action);
  expect(state).toEqual({});
});
