import PropTypes from 'prop-types';
import { React, useState } from 'react';

CategoryFilter.propTypes = {
    threads: PropTypes.array,
    onCategorySelect: PropTypes.func,
};

function CategoryFilter({ threads, onCategorySelect }) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Extract unique categories from threads
    const categories = [...new Set(threads.map((thread) => thread.category))];

    const handleCategoryClick = (category) => {
        const isSelected = selectedCategories.includes(category);
        const newCategories = isSelected
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];

        setSelectedCategories(newCategories);
        onCategorySelect(newCategories);
    };

    return (
        <div className="m-6">
            <h2 className="text-lg font-semibold mb-3">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-3 py-1 rounded-full text-sm ${selectedCategories.includes(category)
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                        #{category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;