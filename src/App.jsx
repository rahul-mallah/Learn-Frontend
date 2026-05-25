import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import ProfileCard from './ProfileCard'
import HooksForm from './components/hooks_form'
import ColorPicker from './components/color_picker'
import UseEffectPractice from './components/useEffect_practice'
import ParentComponent from './ParentComponent';
import DigitalClock from './DigitalClock';
import UseRefPractice from './components/UseRefPractice';


// useRef
// - persist value across renders
// - Does not cause the component to
//   re-render when the value changes

function App() {
  

  return (
      <UseRefPractice/>
  );
}

export default App
