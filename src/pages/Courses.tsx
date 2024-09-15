import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import CoursesSection from '../components/Common/Courses';
import { getFilters, sortCourses } from '../utils/utils';
import Filters from '../components/Courses/Filters';
import { Course, FiltersType } from '../context/CourseTypes';
import { Alignment } from '../context/UiTypes';

const Courses: React.FC = () => {

    const { state } = useAppContext();
    const { course: courseData } = state;
    const breadcrumbs = [{ label: 'Home', url: '/' }, { label: 'Corsi', url: '' }]

    const [courses, setCourses] = useState<Course[]>([]);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const [filters, setFilters] = useState<FiltersType>({
        categories: [],
        years: [],
        prices: []
    });
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSortOrderChange = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const handleFilterChange = (newFilters: { category?: string; year?: number; price?: string }) => {
        // Filtra i corsi in base ai filtri selezionati
        const filtered = courses?.filter(course => {
            const matchesCategory = newFilters.category ? course.category === newFilters.category : true;
            const matchesYear = newFilters.year ? new Date(course.startDate || '').getFullYear() === newFilters.year : true;
            const matchesPrice = newFilters.price ? course.price === newFilters.price : true;
            return matchesCategory && matchesYear && matchesPrice;
        });
        setFilteredCourses(filtered || []);
    };


    useEffect(() => {
        const fetchCourses = async () => {
            setCourses(courseData.courses || []);
            setFilteredCourses(courseData.courses || []); // Mostra tutti i corsi inizialmente

            setFilters(getFilters(courseData.courses || []))
        };

        fetchCourses();
    }, []);

    useEffect(() => {
        console.log("SORT")
        setFilteredCourses(sortCourses(courseData.courses || [], sortOrder));
    }, [sortOrder]);


    return (
        <main className="main">
            <PageTitle description={courseData.description || ''} title={courseData.title || ''} breadcrumbs={breadcrumbs} alignDescription={Alignment.Left} />
            <Filters filters={filters} onFilterChange={handleFilterChange} />
            {filteredCourses && (
                <>
                    <div className="container my-4">
                        <div className="row g-3">
                            <div className="text-left mt-3">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleSortOrderChange}
                                >
                                    {sortOrder === 'asc' ? <i className="bi bi-sort-alpha-up"></i> : <i className="bi bi-sort-alpha-down"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                    <CoursesSection
                        courses={filteredCourses} />
                </>
            )}
        </main>
    );
}

export default Courses;