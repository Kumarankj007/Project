import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/reducer/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count Redux</h1>
      <h3>Count : {count}</h3><br/>
      <button onClick={() => dispatch(increment())}>+</button><span> </span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
export default App;
