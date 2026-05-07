import { useState } from 'react';
import './App.css'
import ProfileCard from './ProfileCard'

// - State updates are async
// - You need to use updater function for multiple
//  state updates.


function App() {

  const handleHobbyClick = (hobby) => {
    alert(`You clicked on ${hobby}`);
  }

  const aliceProfile = {
    name:"Alice",
    age:"23", 
    isMember:true, 
    hobbies:['Reading', 'Cooking'], 
    onClickHobby:handleHobbyClick
  };

  const johnProfile = {
    name:"John", 
    age:42, 
    isMember:false, 
    hobbies:['Swimming', 'Hiking'],
    onClickHobby:handleHobbyClick
  };

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => {
    setCount(count + step);
  }

  const decrementCount = () => {
    setCount(count - step);
  }

  const incrementTwice = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  }
  
  return (
    <div className='app-container'>
      {/* <ProfileCard {...aliceProfile}/>
      <ProfileCard {...johnProfile}/> */}
      <h1>Counter Value: {count}</h1>
      <input type='number'
            value={step}
            onChange={(e) => setStep(parseInt(e.target.value))}/>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={incrementTwice}>+2</button>
    </div>
  )
}

export default App
