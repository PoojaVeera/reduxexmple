import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { connect } from "react-redux";
import { increase, decrease } from "./Action";
export const Inc = ({ count, increase, decrease }) => {
  console.log(count);
  return (
    <div>
      <h3>count from inc.js:{count}</h3>

      <ButtonGroup variant="outlined" sx={{ width: "100px", height: "50px" }}>
        <Button onClick={() => increase()}>+</Button>
        <Button>0</Button>
        <Button onClick={() => decrease()}>-</Button>
      </ButtonGroup>
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state,
});
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREMENT" }),
    decrease: () => dispatch({ type: "DECREMENT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps);
