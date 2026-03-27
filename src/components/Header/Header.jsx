import './Header.css';
import { useContext } from 'react';
import { ToDoContext } from '../../context/ToDo';
import { ETAT_TERMINE } from '../../constants';

export default function Header() {
    const { tasks } = useContext(ToDoContext);
    
    const totalTasks = tasks.length;
    const unfinishedTasks = tasks.filter(task => !ETAT_TERMINE.includes(task.etat)).length;

    return (
        <header className="app-header">
            <h1>Ma To-Do List</h1>
            <div className="task-stats">
                <span className="stat-item">Total: <strong>{totalTasks}</strong></span>
                <span className="stat-item">À faire: <strong>{unfinishedTasks}</strong></span>
            </div>
        </header>
    );
}