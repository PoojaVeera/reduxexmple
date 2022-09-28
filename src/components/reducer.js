const initialState = 0;
function countReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return state + 2;
    case "DECREMENT":
      return state - 2;

    default:
      return state;
  }
}
export default countReducer;
