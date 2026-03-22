import data from '../data.json';
import { useState, createContext } from "react";

export const ToDoContext = createContext();

export default function ToDo(props) {

    const [tasks,     setTasks    ] = useState(data.taches);
    const [folders,   setFolders  ] = useState(data.dossiers);
    const [relations, setRelations] = useState(data.relations);

    return (
        <ToDoContext.Provider value={{tasks, folders, relations}}>
            {props.children}
        </ToDoContext.Provider>
    );
}