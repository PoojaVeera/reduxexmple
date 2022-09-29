const increase = () => (dispatch) => {
  dispatch({ type: "INCREMENT" });
};
const decrease = () => (dispatch) => {
  dispatch({ type: "DECREMENT" });
};

export default increase(decrease);
