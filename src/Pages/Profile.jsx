import React from 'react';
import react from '../assets/react.svg';

const Profile = () => {
    // Dummy data for the user profile
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        profilePicture: {react},
        bio: "Passionate learner and software enthusiast.",
        enrolledCourses: ["React Basics", "JavaScript Advanced", "Tailwind CSS Mastery"]
    };

    return (
        <section className="container mx-auto max-w-2xl py-10">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <img
                    src={`${react}`}
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
                            <li key={index} className="p-2 rounded-md bg-teal-50 hover:bg-teal-100">
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 space-x-4">
                    <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
                        Edit Profile
                    </button>
                    <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
                        Logout
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Profile;
