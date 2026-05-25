import { useEffect, useRef, useState } from "react";

function UseRefPractice(){
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);

    const inputRef = useRef(null);
    const inputRefNext = useRef(null);
    
    useEffect(() => {
        console.log('Component Re-rendered');
    });

    const incrementStateCount = () => {
        setStateCount(stateCount + 1);
    }

    const incrementRefCount = () => {
        refCount.current += 1;
        console.log(`Ref Count: ${refCount.current}`);
    }

    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'yellow';
    }

    const focusInputNext = () => {
        inputRefNext.current.focus();
        inputRefNext.current.style.backgroundColor = 'yellow';
    }

    const resetFocusInput = () => {
        inputRef.current.style.backgroundColor = 'white';
        inputRefNext.current.style.backgroundColor = 'white';
    }

    return (
        <div>
            <p>State Count: {stateCount}</p>
            <button onClick={incrementStateCount}>Increment State Count</button>
            <p>Ref Count: {refCount.current}</p>
            <button onClick={incrementRefCount}>Increment Ref Count</button>
            <h1>Learn React</h1>

            <input ref={inputRef} type='text' placeholder='Focus Me'></input>
            <button onClick={focusInput}>Focus and Highlight</button>

            <input ref={inputRefNext} type='text' placeholder='Focus Me'></input>
            <button onClick={focusInputNext}>Focus and Highlight</button>

            <button onClick={resetFocusInput}>Reset</button>
        </div>
    );
}

export default UseRefPractice;