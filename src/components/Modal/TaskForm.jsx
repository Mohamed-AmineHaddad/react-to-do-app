import { useState, useContext } from 'react';
import { ToDoContext } from '../../context/ToDo';

export default function TaskForm({ onComplete }) {
    const {addTask} = useContext(ToDoContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateEcheance, setDateEcheance] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length < 5) {
            setError('Le titre doit faire au moins 5 caractères.');
            return;
        }
        if (!dateEcheance) {
            setError('La date d\'échéance est obligatoire.');
            return;
        }

        addTask(title, description, dateEcheance);
        onComplete();
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {error && <p className="form-error">{error}</p>}
            
            <div className="form-group">
                <label>Titre (min. 5 caract.)</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>

            <div className="form-group">
                <label>Date d'échéance</label>
                <input 
                    type="date" 
                    value={dateEcheance} 
                    onChange={(e) => setDateEcheance(e.target.value)} 
                    required 
                />
            </div>

            <button type="submit" className="submit-btn">Créer la tâche</button>
        </form>
    );
}