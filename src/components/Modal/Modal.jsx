import './Modal.css';

export default function Modal({ isOpen, onClose, children, title }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </header>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
}
