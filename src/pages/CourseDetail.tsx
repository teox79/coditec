import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { getCourseById } from '../utils/utils';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/Common/PageTitle';
import { Course } from '../context/CourseTypes';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';


const CourseDetail: React.FC = () => {

    const { state } = useAppContext();
    const { course: courseData, ui: ui } = state;


    const { id } = useParams<{ id: string }>();
    const course = getCourseById(courseData.courses || [], id || '');
    const { detail } = course as Course;

    const [activeTab, setActiveTab] = useState(detail?.days[0].tabTitle);

    const handleTabClick = (tabTitle: string) => {
        setActiveTab(tabTitle);
    };

    if (!course) {
        return <p>Corso non trovato</p>; // Gestisci il caso in cui il corso non esiste
    }

    const courseImage = detail?.imgSrc || course?.imgSrc;
    const imgClass = classNames("img-fluid img-rounded", {
        'd-d-block d-lg-none': detail?.gamesURL
    });

    return (
        <>
            <PageTitle
                description={detail?.pageSubtitle || ''}
                title={detail?.title || ''}
            />
            <section id="course-details" className="course-details">
                <div className="container" data-aos="fade-up">

                    <div className="row text-start">
                        <div className="col-lg-8">
                            <img src={`${ui.globalUi.baseUrl}assets/img/courses/${courseImage}`} className={`${imgClass}`} alt="img" />
                            {detail?.gamesURL && (
                                <iframe src={`${detail?.gamesURL}`} width="840" height="558" allowFullScreen className="d-none d-lg-block"></iframe>
                            )}
                            <h3>{detail?.title}</h3>
                            <ReactMarkdown>
                                {detail?.subtitle}
                            </ReactMarkdown>
                        </div>
                        <div className="col-lg-4">
                            {detail?.mentor && (
                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>Mentor</h5>
                                    <p><a href="#">{detail?.mentor}</a></p>
                                </div>
                            )}
                            {detail?.price && (
                                <div className="course-info d-flex justify-content-between align-items-center ">
                                    <h5>Prezzo a partie da:</h5>
                                    <p>{detail?.price}</p>
                                </div>
                            )}
                            {detail?.availableSeats && (
                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>Posti disponibili:</h5>
                                    <p>{detail?.availableSeats}</p>
                                </div>
                            )}
                            {detail?.days && (
                                <div className="course-info d-flex justify-content-between align-items-center " >
                                    <h5>{`Giornate previste ${detail.hoursForDay ? `(ore a giornata ${detail.hoursForDay})` : ""}:`}</h5>
                                    {/* Mostra i giorni del corso 
                                    <p>{formatDays(detail.days)}</p>
                                    */}
                                    <p>{detail.days.length}</p>
                                </div>
                            )}
                            {detail?.timeStart && (
                                <div className="course-info d-flex justify-content-between align-items-center ">
                                    <h5>Orario</h5>
                                    <p>{detail?.timeStart}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section >
            <section id="cource-details-tabs" className="cource-details-tabs">
                <div className="container" data-aos="fade-up">
                    <div id="left-tabs-example">
                        <div className="row text-start">
                            <div className="col-sm-3">
                                <ul className="nav nav-pills flex-column">
                                    {detail?.days.map((day, index) => (
                                        <li className="nav-item" key={index}>
                                            <a
                                                className={`nav-link ${activeTab === day.tabTitle ? 'active' : ''}`}
                                                id={`tab-${index}`}
                                                data-bs-toggle="pill"
                                                role="tab"
                                                onClick={() => handleTabClick(day.tabTitle)}
                                            >
                                                {day.tabTitle}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-9">
                                <div className="tab-content">
                                    {detail?.days.map((day, index) => (
                                        <div
                                            key={index}
                                            className={`tab-pane fade ${activeTab === day.tabTitle ? 'show active' : ''}`}
                                            id={`content-${index}`}
                                            role="tabpanel"
                                            aria-labelledby="tab1-link"
                                        >
                                            <div className="row">
                                                <div className="col-lg-8 details order-2 order-lg-1">
                                                    <h3>{day.dayTitle}</h3>
                                                    <p className="fst-italic">{day.dayDescription}</p>
                                                </div>
                                                <div className="col-lg-4 text-center order-1 order-lg-2">
                                                    <img src={`${ui.globalUi.baseUrl}assets/img/courses/${day.imgSrc}`} alt={day.dayTitle} className="img-fluid img-rounded" />
                                                </div>
                                            </div>
                                        </div >
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseDetail;