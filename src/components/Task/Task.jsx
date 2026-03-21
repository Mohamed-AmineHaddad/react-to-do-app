import "./Task.css";
import { useState } from "react";

export default function Task(props) {
    const [expanding, setExpanding] = useState(false);

    function toggleTaskDetails() {
        setExpanding(!expanding); 
    }

    return (
        <div className="task">
            <button className="toggle-task-details-btn" onClick={toggleTaskDetails}>{expanding ? '▾' : '▸'}</button>
            <p>{props.task.title}</p>
            <p>{props.task.date_echeance}</p>

            {expanding && (
                <div className="task-details">
                    <p>{props.task.description}</p>
                </div>
            )}
        </div> 
    );
}