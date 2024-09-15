import React, { useEffect } from 'react';
import '../../assets/css/modal.css'; // Per lo stile della modale

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
}

const GalleryModal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
    // Aggiungi la classe `modal-open` al body quando la modale è aperta per disabilitare lo scroll
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        // Cleanup: rimuove la classe quando il componente si smonta o quando la modale viene chiusa
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    if (!isOpen) return null; // Non renderizzare nulla se la modale non è aperta

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={onClose}>&times;</span>
                <img src={imageSrc} alt={imageAlt} className="modal-image" />
            </div>
        </div>
    );
};

export default GalleryModal;
