import { useState, useContext } from 'react';
import { ToDoContext } from '../../context/ToDo';

const COLORS = [
    '#ef4444', '#f97316', '#f59e0b', '#10b981', '#06b6d4', 
    '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#64748b'
];

export default function FolderForm({ onComplete }) {
    const { addFolder } = useContext(ToDoContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState(COLORS[0]);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length < 3) {
            setError('Le titre du dossier doit faire au moins 3 caractères.');
            return;
        }

        addFolder(title, description, color);
        onComplete();
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {error && <p className="form-error">{error}</p>}
            
            <div className="form-group">
                <label>Titre (min. 3 caract.)</label>
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
                <label>Couleur</label>
                <div className="color-grid">
                    {COLORS.map(c => (
                        <div 
                            key={c}
                            className={`color-option ${color === c ? 'active' : ''}`}
                            style={{ backgroundColor: c }}
                            onClick={() => setColor(c)}
                        />
                    ))}
                </div>
            </div>

            <button type="submit" className="submit-btn">Créer le dossier</button>
        </form>
    );
}
