import './Task.css';
import Folder from '../Folder/Folder';
import { useState, useContext } from "react";
import { ToDoContext } from "../../context/ToDo";
import { ETATS } from "../../constants";

export default function Task(props) {
    const { updateTask } = useContext(ToDoContext);
    const [expanding, setExpanding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    
    // État local pour l'édition
    const [editedTitle, setEditedTitle] = useState(props.task.title);
    const [editedDesc, setEditedDesc] = useState(props.task.description || '');
    const [editedEtat, setEditedEtat] = useState(props.task.etat);

    function toggleTaskDetails() {
        setExpanding(!expanding); 
        if (isEditing) setIsEditing(false);
    }

    const handleSave = () => {
        updateTask(props.task.id, {
            title: editedTitle,
            description: editedDesc,
            etat: editedEtat
        });
        setIsEditing(false);
    };

    const visibleFolders = expanding ? props.folders : props.folders.slice(0, 2);

    return (
        <div className={`task ${isEditing ? 'editing' : ''}`}>
            <button className="toggle-task-details-btn" onClick={toggleTaskDetails}>
                {expanding ? '▾' : '▸'}
            </button>

            {isEditing ? (
                <input 
                    className="edit-title-input"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                />
            ) : (
                <p className="task-title">{props.task.title}</p>
            )}

            <p className="task-date">{props.task.date_echeance}</p>

            <div className="task-folders">
                {visibleFolders.map(folder => (
                    <Folder key={folder.id} folder={folder} />
                ))}
            </div>

            {expanding && (
                <div className="task-details">
                    {isEditing ? (
                        <div className="edit-mode-container">
                            <div className="edit-group">
                                <label>Description</label>
                                <textarea 
                                    value={editedDesc}
                                    onChange={(e) => setEditedDesc(e.target.value)}
                                />
                            </div>
                            <div className="edit-group">
                                <label>État</label>
                                <select value={editedEtat} onChange={(e) => setEditedEtat(e.target.value)}>
                                    {Object.values(ETATS).map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="edit-actions">
                                <button className="save-btn" onClick={handleSave}>Enregistrer</button>
                                <button className="cancel-btn" onClick={() => setIsEditing(false)}>Annuler</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p className="task-description">{props.task.description || <i>Aucune description.</i>}</p>
                            <div className="task-footer">
                                <span className="task-status-tag">{props.task.etat}</span>
                                <button className="edit-btn" onClick={() => setIsEditing(true)}>Modifier</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div> 
    );
}