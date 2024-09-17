import React, { useState } from 'react';
import { FiltersType } from '../../context/CourseTypes';
import { useAppContext } from '../../context/AppContext';



type Props = {
    filters: FiltersType;
    onFilterChange: (filters: { category?: string; year?: number; price?: string }) => void;
};

const Filters: React.FC<Props> = ({ filters, onFilterChange }) => {
    const { state } = useAppContext();
    const { ui: manageUiData } = state;

    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
    const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
    const [selectedPrice, setSelectedPrice] = useState<string | undefined>(undefined);


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

    const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const price = e.target.value || undefined;
        setSelectedPrice(price);
        onFilterChange({ price });
    };

    const resetFilters = () => {
        setSelectedCategory(undefined);
        setSelectedYear(undefined);
        setSelectedPrice(undefined);
        onFilterChange({ category: undefined, year: undefined, price: undefined });
    };

    const showResetButton = selectedCategory || selectedYear || selectedPrice;

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
                                <option value="">Tutte le categorie</option>
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
                                <option value="">Tutti gli anni</option>
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


                {/* Price Filter */}
                {manageUiData.courseUi?.filters.showPrice && (
                    <div className="col-md-4">
                        <div className="form-floating">
                            <select
                                className="form-select"
                                id="priceFilter"
                                value={selectedPrice || ''}
                                onChange={handlePriceChange}
                            >
                                <option value="">Tutti i prezzi</option>
                                {filters.prices.map((price) => (
                                    <option key={price} value={price}>
                                        {price}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="priceFilter">Prezzi</label>
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
