import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import GalleryItems from '../components/Gallery/GalleryItems';
import GalleryModal from '../components/Gallery/GalleryModal';
import { Image } from "../context/GalleryTypes";

const Gallery: React.FC = () => {

    const { state } = useAppContext();
    const { gallery: galleryData } = state;
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [currentImage, setCurrentImage] = useState<Image | null>(null);
    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Galleria', url: '' }]

    // Funzione per chiudere la modale
    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <main className="main">
            <PageTitle description={galleryData.description || ''} title={galleryData.title || ''} breadcrumbs={breadcrumbs} />
            <section id="galley" className="events section">
                <div className="container" data-aos="fade-up">
                    <div className="row"></div>
                    <GalleryItems
                        setCurrentImage={setCurrentImage}
                        setModalOpen={setModalOpen}
                        images={galleryData.images || []}
                    />
                </div>
            </section>

            {/* Modale per visualizzare l'immagine */}
            {currentImage && (
                <GalleryModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    imageSrc={`/assets/img/gallery/${currentImage.src}`}
                    imageAlt={currentImage.alt}
                />
            )}
        </main>
    );
}

export default Gallery;