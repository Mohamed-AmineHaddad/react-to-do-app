import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

export default function App() { 
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="app-container">
            <Header />
            <List />
            <Footer onAddClick={() => setIsModalOpen(true)} />
            
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                title="Ajouter un élément"
            >
                <p>Les formulaires de création viendront ici.</p>
            </Modal>
        </div>
    );
}