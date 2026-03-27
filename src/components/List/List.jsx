import "./List.css";
import Task from '../Task/Task';
import { useContext, useState } from "react";
import { ToDoContext } from "../../context/ToDo";
import { ETAT_TERMINE } from "../../constants";
import Filter from "../Filter/Filter";
import Sorting from "../Sorting/Sorting";

export default function List() {

    const {tasks, folders, relations} = useContext(ToDoContext);
    const [filters, setFilters] = useState({
        search: '',
        folder: '',
        state: ''
    });
    const [sortOption, setSortOption] = useState('echeance_desc');

    const getFoldersByTaskId = (id) => {
        const taskRelations = relations.filter(r => r.tache === id);
        
        const taskFolders = taskRelations.map(r => 
            folders.find(f => f.id === r.dossier)
        ).filter(f => f !== undefined);
        return taskFolders;
    }

    const renderTasks = () => {
        // 1. Filtrage
        let processedTasks = tasks.filter(task => {
            // Filtre par défaut (non terminé) si aucun état spécifique n'est choisi
            if (!filters.state && ETAT_TERMINE.includes(task.etat)) return false;
            
            // Filtre par recherche texte
            if (filters.search && !task.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
            
            // Filtre par état spécifique
            if (filters.state && task.etat !== filters.state) return false;
            
            // Filtre par dossier
            if (filters.folder) {
                const taskFolderIds = relations.filter(r => r.tache === task.id).map(r => r.dossier);
                if (!taskFolderIds.includes(parseInt(filters.folder))) return false;
            }

            return true;
        });

        // 2. Tri
        processedTasks.sort((a, b) => {
            switch (sortOption) {
                case 'echeance_asc':
                    return new Date(a.date_echeance) - new Date(b.date_echeance);
                case 'echeance_desc':
                    return new Date(b.date_echeance) - new Date(a.date_echeance);
                case 'creation_desc':
                    return new Date(b.date_creation) - new Date(a.date_creation);
                case 'title_asc':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        if (processedTasks.length === 0) {
            return <p className="no-tasks">Aucune tâche ne correspond.</p>;
        }

        return processedTasks.map(task => 
            <Task 
                key={task.id} 
                task={task}
                folders={getFoldersByTaskId(task.id)} />
        );
    }

    return (
        <div className="task-list">
            <Filter filters={filters} setFilters={setFilters} />
            <Sorting sortOption={sortOption} setSortOption={setSortOption} />
            <h2>Tâches</h2>
            {renderTasks()}
        </div>
    );
}