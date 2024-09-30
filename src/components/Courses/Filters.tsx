import React, { useState } from 'react';
import { FiltersType, SelectedFilterType } from '../../context/CourseTypes';
import { useAppContext } from '../../context/AppContext';



type Props = {
    filters: FiltersType;
    onFilterChange: (filters: { category?: string; year?: number; price?: string }) => void;
    setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilterType>>;
};

const Filters: React.FC<Props> = ({ filters, onFilterChange, setSelectedFilters }) => {
    const { state } = useAppContext();
    const { ui: manageUiData } = state;

    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
    const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);


    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value || undefined;
        setSelectedCategory(category);
        onFilterChange({ category });
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const year = e.target.value ? parseInt(e.target.value) : undefined;
        setSelectedYear(year);
        onFilterChange({ year });
    };

    const resetFilters = () => {
        setSelectedCategory(undefined);
        setSelectedYear(undefined);
        setSelectedFilters({ category: undefined, year: undefined });
        onFilterChange({ category: undefined, year: undefined });
    };

    const showResetButton = selectedCategory || selectedYear;

    return (
        <div className="container my-4">
            <div className="row g-3">
                {/* Category Filter */}
                {manageUiData.courseUi?.filters.showCaregory && (
                    <div className="col-md-4">
                        <div className="form-floating">
                            <select
                                className="form-select"
                                id="categoryFilter"
                                value={selectedCategory || ''}
                                onChange={handleCategoryChange}
                            >
                                <option value="all">Tutte le categorie</option>
                                {filters.categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="categoryFilter">Categorie</label>
                        </div>
                    </div>
                )}

                {/* Year Filter */}
                {manageUiData.courseUi?.filters.showYear && (
                    <div className="col-md-4">
                        <div className="form-floating">
                            <select
                                className="form-select"
                                id="yearFilter"
                                value={selectedYear || ''}
                                onChange={handleYearChange}
                            >
                                <option value="0">Tutti gli anni</option>
                                {filters.years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="yearFilter">Anni</label>
                        </div>
                    </div>
                )}
            </div>
            {showResetButton && (
                <div className="text-center mt-3">
                    <button
                        className="btn btn-outline-primary reset-filter"
                        onClick={resetFilters}
                    >
                        <i className="bi bi-arrow-counterclockwise"></i>
                        Resetta Filtri
                    </button>
                </div>
            )}
        </div>
    );
};

export default Filters;
