import { useContext } from 'react';
import { ToDoContext } from '../../context/ToDo';
import { ETATS } from '../../constants';
import './Filter.css';

export default function Filter({ filters, setFilters }) {
    const { folders } = useContext(ToDoContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="filters-container">
            <div className="filter-group">
                <input 
                    type="text" 
                    name="search"
                    placeholder="Rechercher par nom..." 
                    value={filters.search}
                    onChange={handleChange}
                    className="filter-input"
                />
            </div>
            
            <div className="filter-row">
                <div className="filter-group">
                    <select name="folder" value={filters.folder} onChange={handleChange} className="filter-select">
                        <option value="">Tous les dossiers</option>
                        {folders.map(f => (
                            <option key={f.id} value={f.id}>{f.title}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <select name="state" value={filters.state} onChange={handleChange} className="filter-select">
                        <option value="">Tous les états</option>
                        {Object.values(ETATS).map(e => (
                            <option key={e} value={e}>{e}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
