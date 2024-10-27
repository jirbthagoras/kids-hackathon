import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-teal-50 transition">
            <h3 className="text-xl font-bold text-teal-600 mb-2">{title}</h3>
            <p className="text-teal-800 mb-4">{description}</p>
            <Link to={`/courses/${id}`} className="bg-teal-600 text-white px-4 py-2 rounded">
                View Details
            </Link>
        </div>
    );
}

export default CourseCard;
