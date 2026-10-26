import './App.css'
import { useState, useRef} from "react";
import Profile from './components/Profile';
function App() {
  let [number, setNumber] = useState(0);

  function decreaseCount() {
    setNumber(number - 1);
  }



  function increaseCount(){
    setNumber((n) => n + 1);
    inputRef.current.focus();
    
  }
  function setZero(){
    setNumber(number - number);
  }

  const inputRef = useRef(null);
  function checkRef() {
    console.log(inputRef.current.value);
  }


const alex = {
  userName: "Alex Johnson",
  occupation: "Frontend Developer",
  email: "alex.johnson@exampole.com",
  location: "San Francisco, CA",
  skills: "JavaScript, React, HTML",
}


  return (
    <>
      <div id="center">
        <p>Count Number: {number}</p>
        <button onClick={decreaseCount}> Decrease</button>
        <button onClick={increaseCount}> Increase</button>
        <button onClick={setZero}>Reset</button>
        <input ref={inputRef} onChange={checkRef} type="text"/>
        <Profile {...alex}/>
      </div>
      
    </>
  );
}

export default App;
