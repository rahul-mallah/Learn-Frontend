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

function UseEffectPractice() {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(10);

  useEffect(() => {
    // document.title = `Count: ${count}`;
    console.log(`useEffect triggered`);
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 className='use-effect-title'>Learn useEffect</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={()=> setAnotherValue(anotherValue + 1)}>Another Value</button>
    </div>
  );
}
  
export default UseEffectPractice;