import React from 'react';
import CourseCard from '../Components/CourseCard';

const Courses = () => {
    const courses = [
        { id: 1, title: "React Basics", description: "Learn the basics of React." },
        { id: 2, title: "Advanced JavaScript", description: "Deep dive into JS concepts." },
        { id: 3, title: "Tailwind CSS Mastery", description: "Let's learn tailwind CSS" },
    ];

    return (
        <section className="container mx-auto py-10 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-600 text-center mb-6">Available Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} />
                ))}
            </div>
        </section>
    );
}

export default Courses;
