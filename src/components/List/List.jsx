import "./List.css";
import Task from '../Task/Task';
import { useContext } from "react";
import { ToDoContext } from "../../context/ToDo";

export default function List() {

    const {tasks} = useContext(ToDoContext);

    return (
        <div className="task-list">
            <h2>Liste des tâches</h2>
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    );
}