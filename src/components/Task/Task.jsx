import './Task.css';
import Folder from '../Folder/Folder';
import { useState } from "react";

export default function Task(props) {
    const [expanding, setExpanding] = useState(false);

    function toggleTaskDetails() {
        setExpanding(!expanding); 
    }

    const visibleFolders = expanding ? props.folders : props.folders.slice(0, 2);

    return (
        <div className="task">
            <button className="toggle-task-details-btn" onClick={toggleTaskDetails}>
                {expanding ? '▾' : '▸'}
            </button>
            <p className="task-title">{props.task.title}</p>
            <p className="task-date">{props.task.date_echeance}</p>

            <div className="task-folders">
                {visibleFolders.map(folder => (
                    <Folder key={folder.id} folder={folder} />
                ))}
            </div>

            {expanding && (
                <div className="task-details">
                    <p>{props.task.description}</p>
                </div>
            )}
        </div> 
    );
}