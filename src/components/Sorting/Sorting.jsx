import './Sorting.css';

export default function Sorting({ sortOption, setSortOption }) {
    const handleChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className="sorting-container">
            <span className="sorting-label">Trier par :</span>
            <select value={sortOption} onChange={handleChange} className="sorting-select">
                <option value="echeance_desc">Date d'échéance (Décroissant)</option>
                <option value="echeance_asc">Date d'échéance (Croissant)</option>
                <option value="creation_desc">Date de création (Récent)</option>
                <option value="title_asc">Nom (A-Z)</option>
            </select>
        </div>
    );
}
