import React, { useState } from "react";
import MouseTracker from "./components/MouseTracker";

function ParentComponent () {
    const [showComponent, setShowComponent] = useState(true);

    const toggleComponent = () => {
        setShowComponent((prev) => !prev);
    }

    return (
        <div className='mouseTracker-App'>
            <button onClick={toggleComponent}>
                {showComponent ? 'Unmount Tracker' : 'Mount Tracker'}
            </button>

            {showComponent && <MouseTracker/>}
        </div>
    )
}

export default ParentComponent;