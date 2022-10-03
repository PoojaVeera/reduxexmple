// const increase = (dispatch) => () => {
//   dispatch({ type: "INCREMENT" });
// };
// const decrease = (dispatch) => () => {
//   dispatch({ type: "DECREMENT" });
// };

// export default increase(decrease);

export const increase = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrease = () => {
  return {
    type: "DECREMENT",
  };
};
