import React, { createContext, useContext, useEffect, useRef, useState } from 'react';


//   - PropDrilling -> HAS THEME
//     - ComponentA
//       - ComponentB
//         - ThemedComponent -> NEEDS THEME

// useContext()

// Create a Context:
// const MyContext = createContext(defaultValue);

// Consume the Context:
// const contextValue = useContext(MyContext);

// Context.Provider is used to provide a 
// modified value to the components within its tree.
// This value is only accessible to the components
// wrapped by the provider.
// Without provider we have export and import context if components
// are in different file.

// Provide the Context:
// <MyContext.Provider value={someValue}>
//   <ComponentA />
// </MyContext.Provider>


const ThemeContext = createContext('Light');

function PropDrilling(){
    const [theme, setTheme] = useState('Light');

    const toggleTheme = () => {
        setTheme((theme) => theme === 'Light' ? 'Dark' : 'Light');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{border: '2px solid black', padding: '20px'}}>
                <h2>PropDrilling (Parent)</h2>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ComponentA/>
            </div>
        </ThemeContext.Provider>
    );
}

function ComponentA() {
    return (
        <div style={{border: '2px solid blue', padding: '20px'}}>
            <h2>ComponentA (Child)</h2>
            <ComponentB/>
        </div>
    );
}

function ComponentB() {
    return (
        <div style={{border: '2px solid green', padding: '20px'}}>
            <h2>ComponentB (GrandChild)</h2>
            <ThemedComponent/>
        </div>
    );
}

function ThemedComponent(){
    const theme = useContext(ThemeContext);
    return (
        <div style={{border: '2px solid red', padding: '20px'}}>
            <h2>ThemedComponent (Great GrandChild)</h2>
            <div>The current theme is: {theme}</div>
        </div>
    );
}

export default PropDrilling;