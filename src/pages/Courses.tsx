import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import PageTitle from '../components/Common/PageTitle';
import CoursesSection from '../components/Common/Courses';
import { getFilters, sortCourses } from '../utils/utils';
import Filters from '../components/Courses/Filters';
import { Course, FiltersType, SelectedFilterType } from '../context/CourseTypes';
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
    });

    const [selectedFilters, setSelectedFilters] = useState<SelectedFilterType>({
        category: undefined,
        year: undefined,
    });

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSortOrderChange = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };
    const handleFilterChange = (newFilters: { category?: string; year?: number }) => {

        const category = newFilters.category === 'all' ? undefined : newFilters.category || selectedFilters.category;
        const year = newFilters.year === 0 ? undefined : newFilters.year || selectedFilters.year;

        const filteredByYear = courses?.filter(course =>
            year ? new Date(course.startDate || '').getFullYear() === year : true
        );

        // Se c'è una categoria selezionata, filtro i risultati per anno anche per categoria
        const filtered = filteredByYear?.filter(course =>
            category ? course.category === category : true
        );

        if (selectedFilters.category !== category || selectedFilters.year !== year) {
            setSelectedFilters({
                category: category || undefined,
                year: year || undefined,
            })
        }

        // Se non ci sono corsi che soddisfano i criteri, l'elenco sarà vuoto
        setFilteredCourses(filtered?.length ? filtered : []);
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

    useEffect(() => {
        if (selectedFilters.category || selectedFilters.year)
            handleFilterChange({ category: selectedFilters.category, year: selectedFilters.year });
        else
            setFilteredCourses(courseData.courses || []);
    }, [selectedFilters]);



    return (
        <main className="main">
            <PageTitle description={courseData.description || ''} title={courseData.title || ''} breadcrumbs={breadcrumbs} alignDescription={Alignment.Left} />
            <Filters filters={filters} onFilterChange={handleFilterChange} setSelectedFilters={setSelectedFilters} />
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