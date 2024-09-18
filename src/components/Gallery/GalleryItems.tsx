import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import '../../assets/css/gallery.css'; // Per lo stile opzionale
import { Image } from "../../context/GalleryTypes";
import { useAppContext } from '../../context/AppContext';

interface GalleryItemsProps {
    setCurrentImage: React.Dispatch<React.SetStateAction<Image | null>>;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    images: Image[];
}

const GalleryItems: React.FC<GalleryItemsProps> = ({ setCurrentImage, setModalOpen, images = [] }) => {

    const [visibleImages, setVisibleImages] = useState<number>(5); // Mostra inizialmente 5 immagini
    const { state } = useAppContext();
    const { ui: ui } = state;

    // Funzione per caricare più immagini
    const loadMoreImages = () => {
        setVisibleImages((prevVisible) => prevVisible + 3); // Aggiunge altre 3 immagini
    };

    // Funzione per aprire la modale
    const openModal = (image: Image) => {
        setCurrentImage(image);
        setModalOpen(true);
    };

    // Breakpoint per il layout responsive
    const breakpointColumns = {
        default: 3, // Numero di colonne in layout normale
        1100: 2,    // Colonne per schermi medi
        700: 1      // Colonne per schermi piccoli
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.slice(0, visibleImages).map((image) => (
                    <div key={image.id} className="fade-in" onClick={() => openModal(image)}>
                        <img src={`${ui.globalUi.baseUrl}assets/img/gallery/${image.src}`} alt={image.alt} className="gallery-image" />
                    </div>
                ))}
            </Masonry>

            {/* Pulsante "Load More" */}
            {visibleImages < images.length && (
                <div className="load-more-container">
                    <button onClick={loadMoreImages} className="load-more-button">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default GalleryItems;
