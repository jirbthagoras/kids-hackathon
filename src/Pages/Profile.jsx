import React, { useState, useEffect } from 'react';
import react from '../assets/react.svg';
import { Link } from "react-router-dom";

const Profile = () => {
    // Load initial data from local storage or set default values
    const getInitialUser = () => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : {
            name: "John Doe",
            email: "john.doe@example.com",
            profilePicture: react,
            bio: "Passionate learner and software enthusiast.",
            enrolledCourses: ["React Basics", "JavaScript Advanced", "Tailwind CSS Mastery"]
        };
    };

    const [user, setUser] = useState(getInitialUser);
    const [isEditing, setIsEditing] = useState(false);

    // Save updated profile data to local storage
    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(user));
        setIsEditing(false);
    };

    // Handle input change for the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    useEffect(() => {
        // Load user data from local storage on component mount
        const savedUser = getInitialUser();
        setUser(savedUser);
    }, []);

    return (
        <section className="container mx-auto max-w-2xl py-10">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <img
                    src={`${user.profilePicture}`}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-600"
                />
                <h2 className="text-3xl font-bold text-teal-600 mb-2">{user.name}</h2>
                <p className="text-teal-700">{user.email}</p>
                <p className="mt-4 text-gray-700">{user.bio}</p>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-teal-600 mb-4">Enrolled Courses</h3>
                    <ul className="text-teal-800 space-y-2">
                        {user.enrolledCourses.map((course, index) => (
                            <Link key={index} to="/courses" className="bg-teal-900 text-white px-6 py-2 ml-4 rounded hover:bg-teal-700">
                                {course}
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 space-x-4">
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
                    >
                        Edit Profile
                    </button>
                    <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                        Logout
                    </button>
                </div>
            </div>

            {/* Edit Profile Overlay */}
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <h3 className="text-2xl font-bold text-teal-600 mb-4">Edit Profile</h3>
                        <label className="block mb-2">
                            <span className="text-teal-800 font-semibold">Name</span>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                className="block w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-2">
                            <span className="text-teal-800 font-semibold">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                className="block w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-teal-800 font-semibold">Bio</span>
                            <textarea
                                name="bio"
                                value={user.bio}
                                onChange={handleInputChange}
                                className="block w-full mt-1 p-2 border rounded"
                            />
                        </label>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Profile;
