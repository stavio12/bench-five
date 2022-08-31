import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";

import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";
import { reducer, initialState } from "./States/reducer";

import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div className="w-11/12 mx-auto pt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Products />} />
          </Routes>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
