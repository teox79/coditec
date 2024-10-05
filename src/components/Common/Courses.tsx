import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/utils";
import { Course } from "../../context/CourseTypes";
import { useAppContext } from "../../context/AppContext";



// Interfaccia per le props del componente Courses
interface CoursesProps {
    title?: string;
    subtitle?: string;
    courses?: Course[];
    showDate?: boolean;
    isHistory?: boolean;
}

const Courses: React.FC<CoursesProps> = ({ title = '', subtitle = '', courses = [], showDate = true, isHistory = false }) => {

    const [images, setImages] = useState<{ [key: string]: string }>({});
    const { state } = useAppContext();
    const { ui: ui, footer: footerData } = state;

    const {
        contactInfo,
    } = footerData;

    useEffect(() => {
        const loadImages = async (path: string, imgKey: keyof Course, courses: Course[]) => {
            const imagePromises = courses.map(async (course) => {
                const imgPath = course[imgKey] as string;
                try {
                    const imageUrl = `${path}${imgPath}`;

                    // Usa l'URL direttamente
                    const image = new Image();
                    image.src = imageUrl;
                    await new Promise((resolve, reject) => {
                        image.onload = () => resolve(image);
                        image.onerror = () => reject(new Error(`Failed to load image at ${imageUrl}`));
                    });

                    console.log('Loaded image:', image.src);
                    return { [imgPath]: image.src };
                } catch (error) {
                    console.error(`Failed to load image for path: ${imgPath}`, error);
                    return { [imgPath]: "" }; // fallback path or empty string
                }
            });

            try {
                const imageResults = await Promise.all(imagePromises);
                const imageMap = imageResults.reduce((acc, imgObj) => ({ ...acc, ...imgObj }), {});
                return imageMap; // Restituisci l'oggetto delle immagini caricate
            } catch (error) {
                console.error('Error loading images:', error);
                return {}; // Restituisci un oggetto vuoto in caso di errore
            }
        };

        const updateImages = async () => {
            // Carica immagini per il percorso '/assets/img/courses/'
            const courseImages = await loadImages(`${ui.globalUi.baseUrl}assets/img/courses/`, 'imgSrc', courses);

            // Carica immagini per il percorso '/assets/img/trainers/'
            //const trainerImages = await loadImages(`${ui.globalUi.baseUrl}assets/img/trainers/`, 'trainerImg', courses);

            // Combina le immagini caricate con quelle esistenti
            setImages((prevImages) => ({
                ...prevImages,
                ...courseImages,
                //...trainerImages
            }));
        };

        // Chiama updateImages per caricare e aggiornare le immagini
        updateImages();

    }, [courses]);

    return (
        <section id="courses" className="courses section">
            {title && subtitle && (
                <div className="container section-title" data-aos="fade-up">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            )}

            <div className="container">
                <div className="row">
                    {courses.map((course, index) => {
                        const subjectEmail = `Richiesta Informazioni ${course.title}`;
                        return (
                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                                data-aos="zoom-in"
                                data-aos-delay={course.delay}
                                key={index}
                            >

                                <div className="d-flex flex-column course-item" style={{ cursor: course.detail ? "pointer" : "default" }}>
                                    <a href={course.detail ? `#/course/${course.id}` : '#'}
                                        target={course.detail ? "_blank" : undefined}

                                        onClick={(e) => {
                                            if (!course.detail) {
                                                e.preventDefault(); // Impedisce l'azione del link se course.detail è vuoto
                                            }
                                        }}
                                    >
                                        <img src={images[course.imgSrc]} alt={course.title} />
                                    </a>
                                    <div className="flex-fill d-flex flex-column course-content">
                                        <a className="flex-fill" href={course.detail ? `#/course/${course.id}` : '#'}
                                            target={course.detail ? "_blank" : undefined}

                                            onClick={(e) => {
                                                if (!course.detail) {
                                                    e.preventDefault(); // Impedisce l'azione del link se course.detail è vuoto
                                                }
                                            }}
                                        >
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <p className="category">{course.category}</p>
                                                <p className="price">Prezzo a partire da: {course.price}</p>
                                            </div>
                                            {showDate && <p className="description description-date">Data Inizio: <span>{formatDate(course.startDate)}</span></p>}
                                            <h3>
                                                {course.title}
                                            </h3>
                                            <p className="flex-fill description">{course.description}</p>
                                        </a>
                                        {subjectEmail && isHistory && (
                                            <a className="generic-btn generic-btn-large"
                                                href={`mailto:${contactInfo.email}?subject=${subjectEmail}&body=Salve,%20ho%20bisogno%20di%20maggiori%20informazioni.`}
                                                target="_blank"
                                            >
                                                Contattaci
                                            </a>
                                        )}
                                        {!isHistory && (
                                            <div style={{ textAlign: 'center' }}>
                                                {!course?.registration?.isOpen ? (
                                                    <span className="course-registration-info">Le iscrizioni apriranno a breve</span>
                                                ) : (
                                                    <a
                                                        className="generic-btn generic-btn-large"
                                                        href={course?.registration?.url}
                                                        target="_blank"
                                                    >
                                                        Iscriviti
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                        {/*
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src={images[course.trainerImg]} className="img-fluid" alt={course.trainerName} />
                                                <a href="#" className="trainer-link">{course.trainerName}</a>
                                            </div>
                                        </div>
                                        */}
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    {courses.length === 0 && (
                        <div className="col text-center">
                            <h3>Non ci sono corsi disponibili</h3>
                        </div>
                    )}
                </div>
            </div>
        </section >
    );
};

export default Courses;
