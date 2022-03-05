import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";
import { login } from "./actions/login";

function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {!islogged && (
        <div style={{ marginTop: 30 }}>
          <button onClick={() => dispatch(login())}>LOGIN</button>
          <h2>User has been logged out</h2>
        </div>
      )}

      {islogged && (
        <div style={{ marginTop: 30 }}>
          <button onClick={() => dispatch(login())}>LOGOUT</button>
          <h2>User is logged in</h2>
        </div>
      )}
    </div>
  );
}

export default App;
