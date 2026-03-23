import data from '../data.json';
import { ETATS } from '../constants';
import { useState, createContext } from "react";

export const ToDoContext = createContext();

export default function ToDo(props) {

    const [tasks,     setTasks    ] = useState(data.taches);
    const [folders,   setFolders  ] = useState(data.dossiers);
    const [relations, setRelations] = useState(data.relations);
    
    const addTask = (title, description, date_echeance, equipiers = []) => {
        const newTask = {
            "id": (tasks.length > 0 ? Math.max(...tasks.map(value => value.id)) + 1 : 101),
            "title": title,
            "description": description,
            "date_creation": new Date().toLocaleDateString('en-CA'),
            "date_echeance": date_echeance,
            "etat": ETATS.NOUVEAU,
            "equipiers": equipiers,
        };
        setTasks([...tasks, newTask]);
    }

    const removeTask = (id) => {
        const newTaskList = tasks.filter(value => value.id !== id);
        setTasks(newTaskList);
        const newRelations = relations.filter(value => value.tache !== id);
        setRelations(newRelations);
    }

    return (
        <ToDoContext.Provider value={{tasks, folders, relations, addTask, removeTask}}>
            {props.children}
        </ToDoContext.Provider>
    );
}