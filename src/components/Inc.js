import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { increase } from "./Action";
import { decrease } from "./Action";
const Inc = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>count from inc.js:{count}</h3>
      <ButtonGroup variant="outlined" sx={{ width: "100px", height: "50px" }}>
        <Button onClick={() => dispatch(increase())}>+</Button>
        <Button>c</Button>
        <Button onClick={() => dispatch(decrease())}>-</Button>
      </ButtonGroup>
    </div>
  );
};
const mapStateToProps = (state) => ({
  result: state,
});
const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: "INCREMENT" }),
    decrease: () => dispatch({ type: "DECREMENT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Inc);
