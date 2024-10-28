import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/Papan Pendidikan Hijau Stereoscopic, Liburan, Poster, Hijau Latar Belakang untuk Unduhan Gratis.jpeg';

const Home = () => {
    return (
        <section
            className="bg-cover bg-center h-screen text-white flex justify-center items-center text-center p-4 md:p-8"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="bg-black bg-opacity-60 w-full max-w-3xl p-6">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">
                    Welcome To <strong className="text-teal-500">Learnversal</strong>
                </h1>
                <p className="text-lg md:text-2xl mb-8">
                    Place where learning becomes: <strong className="text-rose-700 bg-white rounded">Versatile</strong> and <strong className="text-teal-500 bg-white rounded">Comprehensive</strong>
                </p>
                <Link to="/courses" className="bg-teal-600 text-white px-4 py-2 md:px-6 md:py-2 rounded">
                    View Courses
                </Link>
            </div>
        </section>
    );
}

export default Home;
