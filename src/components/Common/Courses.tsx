import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/utils";
import { Course } from "../../context/CourseTypes";



// Interfaccia per le props del componente Courses
interface CoursesProps {
    title?: string;
    subtitle?: string;
    courses?: Course[];
}

const Courses: React.FC<CoursesProps> = ({ title = '', subtitle = '', courses = [] }) => {

    const [images, setImages] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const loadImages = async (path: string, imgKey: keyof Course, courses: Course[]) => {
            const imagePromises = courses.map(async (course) => {
                const imgPath = course[imgKey] as string;
                try {
                    const imageUrl = `${path}${imgPath}`;
                    console.log('Requested image URL:', imageUrl);

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
            const courseImages = await loadImages('assets/img/courses/', 'imgSrc', courses);

            // Carica immagini per il percorso '/assets/img/trainers/'
            const trainerImages = await loadImages('assets/img/trainers/', 'trainerImg', courses);

            // Combina le immagini caricate con quelle esistenti
            setImages((prevImages) => ({
                ...prevImages,
                ...courseImages,
                ...trainerImages
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
                    {courses.map((course, index) => (
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay={course.delay}
                            key={index}
                        >
                            <a href={course.detail ? `#/course/${course.id}` : '#'}
                                target={course.detail ? "_blank" : undefined}

                                onClick={(e) => {
                                    if (!course.detail) {
                                        e.preventDefault(); // Impedisce l'azione del link se course.detail è vuoto
                                    }
                                }}
                            >
                                <div className="course-item" style={{ cursor: course.detail ? "pointer" : "default" }}>
                                    <img src={images[course.imgSrc]} className="img-fluid" alt={course.title} />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">{course.category}</p>
                                            <p className="price">Prezzo: {course.price}</p>
                                        </div>
                                        <h3>
                                            {course.title}
                                        </h3>
                                        <p className="description">{course.description}</p>
                                        <p className="description">Data Inizio: {formatDate(course.startDate)}</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src={images[course.trainerImg]} className="img-fluid" alt={course.trainerName} />
                                                <a href="#" className="trainer-link">{course.trainerName}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Courses;
