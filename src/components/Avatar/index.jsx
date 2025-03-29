import React from 'react';
import PropTypes from 'prop-types';
import './../../stories/avatar.css';

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
        if (!name) return 'avatar pink-purple';

        const classes = [
            'avatar pink-purple',
            'avatar blue-teal',
            'avatar green-emerald',
            'avatar yellow-orange',
            'avatar red-pink',
            'avatar indigo-purple',
            'avatar cyan-blue',
            'avatar violet-fuchsia'
        ];

        const hash = name.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        const index = Math.abs(hash) % classes.length;
        return classes[index];
    };

    return (
        <div className={`w-10 h-10 rounded-full ${getColorClass(name)} flex items-center justify-center text-white font-semibold`}>
            {getInitials(name)}
        </div>
    );
}

export default Avatar;