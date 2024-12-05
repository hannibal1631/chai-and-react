import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else if (counter === 20) {
      counter;
      console.log('NOOOOOOO');
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else if (counter === 0) {
      counter;
      console.log('are you mad fam???');
    }
  };

  return (
    <>
      <h1>What a wonderful day</h1>
      <h2>apes counter: {counter}</h2>

      <button onClick={addValue}>we believe CEASER</button>
      <br />
      <button onClick={removeValue}>CEASER is bad</button>
    </>
  );
}

export default App;
