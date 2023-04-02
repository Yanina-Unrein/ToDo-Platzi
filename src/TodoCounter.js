import React from "react";
import './TodoCounter.css';

function TodoCounter(){
    return(
        <div>
            <h1 className="TodoCounterTitle">Your Task</h1>
            <h2 className="TodoCounterSubtitle">Completed 3 to 5</h2> 
        </div>
    );
}

export { TodoCounter };
