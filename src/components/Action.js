export const Increase = () => (dispatch) => {
  dispatch({ type: "INCREMENT" });
};

export const Decrease = () => (dispatch) => {
  dispatch({ type: "DECREMENT" });
};
