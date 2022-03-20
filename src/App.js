import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Display from './components/Display/Display';
function App() {
  const [count, setCount] = useState(0)
  function number() {
    const updateCount = count + 1;
    setCount(updateCount)
  }
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={number}>increase</button>
      <Display count={count}></Display>
    </div>
  );
}

export default App;
 /* const [count, setCount] = useState(0);
const increseNumber = () => {
const newValue = count + 1;
setCount(newValue) */