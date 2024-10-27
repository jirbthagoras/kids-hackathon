import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import coursesData from '../Components/CoursesData';

const CourseDetail = () => {
    const { id } = useParams();
    const courseId = parseInt(id, 10);

    const courseDetails = coursesData.find(course => course.id === courseId);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-${courseId}`)) || [];
        setComments(savedComments);
    }, [courseId]);

    const updateLocalStorage = (updatedComments) => {
        localStorage.setItem(`comments-${courseId}`, JSON.stringify(updatedComments));
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            setNewComment('');
            updateLocalStorage(updatedComments); // Immediately update local storage
        }
    };

    // Handle deleting a comment
    const handleDeleteComment = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
        updateLocalStorage(updatedComments); // Update local storage after deletion
    };

    if (!courseDetails) {
        return <p className="text-center text-red-600 mt-10">Course not found!</p>;
    }

    return (
        <section className="container mx-auto max-w-2xl py-10">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">{courseDetails.title}</h2>
            <p className="text-gray-700 mb-6">{courseDetails.description}</p>

            <h3 className="text-xl font-semibold text-teal-600 mb-4">Course Lessons</h3>
            <ul className="list-disc list-inside text-teal-800 space-y-2 mb-6">
                {courseDetails.lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                ))}
            </ul>

            <div className="mt-8">
                <Link to="/courses" className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
                    Back to Courses
                </Link>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Course Chat</h3>

                <div className="mb-4">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Add your comment..."
                    ></textarea>
                    <button
                        onClick={handleAddComment}
                        className="bg-teal-600 text-white px-4 py-2 mt-2 rounded hover:bg-teal-700"
                    >
                        Add Comment
                    </button>
                </div>

                <ul className="space-y-4">
                    {comments.map((comment, index) => (
                        <li key={index} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                            <p className="text-gray-800">{comment}</p>
                            <button
                                onClick={() => handleDeleteComment(index)}
                                className="text-red-600 hover:text-red-800 font-semibold"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CourseDetail;
