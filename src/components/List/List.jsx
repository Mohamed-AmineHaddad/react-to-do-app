import "./List.css";
import Task from '../Task/Task';
import { useContext } from "react";
import { ToDoContext } from "../../context/ToDo";
import { ETAT_TERMINE } from "../../constants";

export default function List() {

    const {tasks, folders, relations} = useContext(ToDoContext);

    const getFoldersByTaskId = (id) => {
        const taskRelations = relations.filter(r => r.tache === id);
        
        const taskFolders = taskRelations.map(r => 
            folders.find(f => f.id === r.dossier)
        ).filter(f => f !== undefined);
        return taskFolders;
    }

    const renderTasks = () => {
        const unfinishedTasks = tasks.filter(task => !ETAT_TERMINE.includes(task.etat));

        const sortedTasks = [...unfinishedTasks].sort((a, b) => {
            return new Date(b.date_echeance) - new Date(a.date_echeance);
        });

        return sortedTasks.map(task => 
            <Task 
                key={task.id} 
                task={task}
                folders={getFoldersByTaskId(task.id)} />
        );
    }

    return (
        <div className="task-list">
            <h2>Tâches à faire</h2>
            {renderTasks()}
        </div>
    );
}