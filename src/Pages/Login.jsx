import React from 'react';

const Login = () => {
    return (
        <section className="container mx-auto max-w-md py-20">
            <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">Login</h2>
            <form className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-teal-700 mb-2">Email</label>
                    <input type="email" className="w-full p-2 border border-teal-300 rounded" />
                </div>
                <div className="mb-6">
                    <label className="block text-teal-700 mb-2">Password</label>
                    <input type="password" className="w-full p-2 border border-teal-300 rounded" />
                </div>
                <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded">Login</button>
            </form>
        </section>
    );
}

export default Login;
