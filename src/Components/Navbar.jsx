import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-teal-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">LearnVersal</h1>
                <div>
                    <Link to="/" className="px-4">Home</Link>
                    <Link to="/courses" className="px-4">Courses</Link>
                    <Link to="/profile" className="px-4">Profile</Link>
                    <Link to="/login" className="px-4">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
