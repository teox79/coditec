import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import { Alignment } from '../context/UiTypes';
import History from '../components/Courses/History';
import { getCoursesByDateOrYear, getPastCourses } from '../utils/utils';
import Upcaming from '../components/Courses/Upcaming';

const Courses: React.FC = () => {

    const { state } = useAppContext();
    const { course: courseData } = state;
    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Corsi', url: '' }]
    const [activeTab, setActiveTab] = useState('upcoming');

    const nextCourses = getCoursesByDateOrYear(courseData.courses || [], new Date(), 'asc');
    const historyCourses = getPastCourses(courseData.courses || [], 'desc');

    return (
        <main className="main">
            <PageTitle description={courseData.description || ''} title={courseData.title || ''} breadcrumbs={breadcrumbs} alignDescription={Alignment.Left} />
            <div className="container mt-5">
                <ul className="nav nav-tabs" id="coursesTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
                            id="upcoming-tab"
                            data-bs-toggle="tab"
                            role="tab"
                            onClick={() => setActiveTab('upcoming')}
                        >
                            Prossimi Corsi
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
                            id="history-tab"
                            data-bs-toggle="tab"
                            role="tab"
                            onClick={() => setActiveTab('history')}
                        >
                            Storico Corsi
                        </button>
                    </li>
                </ul>

                <div className="tab-content mt-3" id="coursesTabsContent">
                    <div
                        className={`tab-pane fade ${activeTab === 'upcoming' ? 'show active' : ''}`}
                        id="upcoming"
                        role="tabpanel"
                    >
                        <div className="container my-4">
                            <p>I seguenti corsi stanno per iniziare! Non perdere l'opportunità di iscriverti e riserva subito il tuo posto.
                                Iscriviti per assicurarti un posto e ricevere tutte le informazioni necessarie.</p>
                        </div>
                        <Upcaming courseList={nextCourses} />
                    </div>

                    <div
                        className={`tab-pane fade ${activeTab === 'history' ? 'show active' : ''}`}
                        id="history"
                        role="tabpanel"
                    >
                        <div className="container my-4">
                            <p>Di seguito sono riportati i corsi che possono essere richiesti per nuove sessioni. Se sei interessato, contattaci per ulteriori informazioni e dettagli specifici.</p>
                        </div>
                        <History courseList={historyCourses} />
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Courses;