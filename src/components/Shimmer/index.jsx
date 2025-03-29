import PropTypes from 'prop-types';
import React from 'react';

Shimmer.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    rounded: PropTypes.string,
};
function Shimmer({ width = 'w-full', height = 'h-4', className = '', rounded = 'rounded' }) {
    return (
        <div className={`${width} ${height} bg-gray-200 ${rounded} animate-pulse ${className}`} />
    );
}

export default Shimmer;