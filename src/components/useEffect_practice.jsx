import React, { useState, useEffect } from 'react';


    // The useEffect hook in React lets you run code 
// automatically when somethng changes or when a 
// component loads.

//It's like setting a task to happen after the
// screen updates or when certain data is ready.

// SYNTAX:
// useEffect(() => {
// // Code to run
// }, [dependencies]);

// useEffect (() => {});  // Run on every render
// useEffect (() => {}, []);  // Run only once after the initial render
// useEffect (() => {}, [count]);  // Runs on initial
//                                 // render and when 'count' changes

function useEffect_practice() {
const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Learn useEffect</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default useEffect_practice;