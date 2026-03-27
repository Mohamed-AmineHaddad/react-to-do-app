import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import TaskForm from "./components/Modal/TaskForm";
import FolderForm from "./components/Modal/FolderForm";

export default function App() { 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('task'); // 'task' ou 'folder'

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app-container">
            <Header />
            <List />
            <Footer onAddClick={() => setIsModalOpen(true)} />
            
            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal}
                title="Ajouter un élément"
            >
                <div className="modal-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'task' ? 'active' : ''}`}
                        onClick={() => setActiveTab('task')}
                    >
                        Nouvelle Tâche
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'folder' ? 'active' : ''}`}
                        onClick={() => setActiveTab('folder')}
                    >
                        Nouveau Dossier
                    </button>
                </div>

                <div className="modal-body">
                    {activeTab === 'task' ? (
                        <TaskForm onComplete={closeModal} />
                    ) : (
                        <FolderForm onComplete={closeModal} />
                    )}
                </div>
            </Modal>
        </div>
    );
}