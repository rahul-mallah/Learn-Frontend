import { useState } from 'react';
import './App.css'
import ProfileCard from './ProfileCard'

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
  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }
  
  return (
    <div className='app-container'>
      {/* <ProfileCard {...aliceProfile}/>
      <ProfileCard {...johnProfile}/> */}
      <h1>Counter Value: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default App
