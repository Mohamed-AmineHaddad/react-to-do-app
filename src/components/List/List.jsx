import "./List.css";
import Task from '../Task/Task';
import { useContext } from "react";
import { ToDoContext } from "../../context/ToDo";

export default function List() {

    const {tasks, folders, relations} = useContext(ToDoContext);

    const getFoldersByTaskId = (id) => {
        const taskRelations = relations.filter(r => r.tache === id);
        
        const taskFolders = taskRelations.map(r => 
            folders.find(f => f.id === r.dossier)
        );
        return taskFolders;
    }

    const renderTasks = () => {
        return tasks.map(task => 
            <Task 
                key={task.id} 
                task={task}
                folders={getFoldersByTaskId(task.id)} />
        );
    }

    return (
        <div className="task-list">
            <h2>Liste des tâches</h2>
            {renderTasks()}
        </div>
    );
}