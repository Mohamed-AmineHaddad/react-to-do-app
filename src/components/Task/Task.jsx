import "./Task.css";
import { useState } from "react";

export default function Task(props) {
    const [simpleMode, setMode] = useState(true);

    function switchMode() {
        setMode(!simpleMode); 
    }

    return (
        <div className="task">
            <button className="switch-mode-btn" onClick={switchMode}>{simpleMode ? '▸' : '▾'}</button>
            <p>{props.task.title}</p>
            <p>{props.task.date_echeance}</p>

            {!simpleMode && (
                <div className="task-details">
                    <p>{props.task.description}</p>
                </div>
            )}
        </div> 
    );
}