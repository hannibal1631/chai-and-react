import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: 'hannibal',
    age: 23,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind Test
      </h1>
      <Card username='skeleton-1' subHeading='my bones are chilled' paraText='happy to see you looking at me' />
      <Card username='skeleton-2' />
    </>
  );
}

export default App;
