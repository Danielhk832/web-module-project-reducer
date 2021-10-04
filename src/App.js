import React from "react";
import { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import { addOne, memoryClear } from "./actions";
import { applyNumber } from "./actions";
import { changeOperation } from "./actions";
import { clear } from "./actions";
import { memorySet } from "./actions";
import { memoryAdd } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleAddOne = (number) => {
    // dispatch(addOne());
    dispatch(applyNumber(number));
  };

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const handleMemorySet = () => {
    dispatch(memorySet());
  };

  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  };

  const handleMemoryClear = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleMemorySet()} />
              <CalcButton value={"MR"} onClick={() => handleMemoryAdd()} />
              <CalcButton value={"MC"} onClick={() => handleMemoryClear()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAddOne(1)} />
              <CalcButton value={2} onClick={() => handleAddOne(2)} />
              <CalcButton value={3} onClick={() => handleAddOne(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAddOne(4)} />
              <CalcButton value={5} onClick={() => handleAddOne(5)} />
              <CalcButton value={6} onClick={() => handleAddOne(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAddOne(7)} />
              <CalcButton value={8} onClick={() => handleAddOne(8)} />
              <CalcButton value={9} onClick={() => handleAddOne(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")} />
              <CalcButton value={"*"} onClick={() => handleOperation("*")} />
              <CalcButton value={"-"} onClick={() => handleOperation("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
