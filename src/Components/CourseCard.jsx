import React from 'react';

const CourseCard = ({ title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-teal-50 transition">
            <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
            <p className="text-teal-800 mb-4">{description}</p>
            <button className="bg-teal-600 text-white px-4 py-2 rounded">View Details</button>
        </div>
    );
}

export default CourseCard;
