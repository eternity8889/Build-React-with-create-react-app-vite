import './App.css'
import { useState } from "react";

function App() {
  let [number, setNumber] = useState(0);

  function decreaseCount() {
    setNumber(number - 1);
  }

  // function increaseCount(){
  //   setNumber(number + 1);
  // }

  function increaseCount(){
    setNumber((prev1) => prev1 + 1);
    setNumber((prev2) => prev2 + 1);
    setNumber((prev3) => prev3 + 1);
    setNumber((n) => n + 1);
  }

  function setZero(){
    setNumber(number - number);
  }

  return (
    <>
      <div id="center">
        <p>Count Number: {number}</p>
        <button onClick={decreaseCount}> Decrease</button>
        <button onClick={increaseCount}> Increase</button>
        <button onClick={setZero}>Reset</button>
      </div>
    </>
  );
}

export default App;
