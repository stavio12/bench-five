import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { reducer, initialState } from "./States/Actions";
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // <Routes>
    //   <Route path="/" />
    // </Routes>
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="App">
          <h1 className="text-3xl font-bold underline text-center">
            Hello world!
          </h1>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
