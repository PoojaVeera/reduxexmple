import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { connect } from "react-redux";
export const Inc = () => {
  return (
    <div>
      <ButtonGroup variant="outlined" sx={{ width: "100px", height: "50px" }}>
        <Button sx={{ backgroundColor: "green", color: "white" }}>+</Button>
        <Button sx={{ backgroundColor: "red", color: "white" }}>0</Button>
        <Button sx={{ backgroundColor: "green", color: "white" }}>-</Button>
      </ButtonGroup>
      <h3>count from inc.js</h3>
    </div>
  );
};
