import "./List.css";
import data from '../../data.json';
import Task from '../Task/Task';


const tasks = data.taches;

export default function List() {
    return (
        <div className="task-list">
            <h2>Liste des tâches</h2>
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    );
}