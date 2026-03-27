import './Footer.css';

export default function Footer({ onAddClick }) {
    return (
        <footer className="app-footer">
            <button className="add-btn" onClick={onAddClick} title="Ajouter une tâche ou un dossier">+</button>
        </footer>
    );
}
