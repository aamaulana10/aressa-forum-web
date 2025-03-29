import React from 'react';
import PropTypes from 'prop-types';

Avatar.propTypes = {
    name: PropTypes.string
};
function Avatar({ name }) {
    const getInitials = (name) => {
        if (!name) return '';

        const words = name.trim().split(' ');
        if (words.length === 1) {
            return words[0].substring(0, 2).toUpperCase();
        }
        return (words[0][0] + words[1][0]).toUpperCase();
    };

    const getColorClass = (name) => {
        if (!name) return 'bg-gray-500';

        const gradients = [
            'bg-gradient-to-r from-pink-500 to-purple-500',
            'bg-gradient-to-r from-blue-500 to-teal-500',
            'bg-gradient-to-r from-green-500 to-emerald-500',
            'bg-gradient-to-r from-yellow-500 to-orange-500',
            'bg-gradient-to-r from-red-500 to-pink-500',
            'bg-gradient-to-r from-indigo-500 to-purple-500',
            'bg-gradient-to-r from-cyan-500 to-blue-500',
            'bg-gradient-to-r from-violet-500 to-fuchsia-500'
        ];

        const hash = name.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        const index = Math.abs(hash) % gradients.length;
        return gradients[index];
    };

    return (
        <div className={`w-10 h-10 rounded-full ${getColorClass(name)} flex items-center justify-center text-white font-semibold`}>
            {getInitials(name)}
        </div>
    );
}

export default Avatar;