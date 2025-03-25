import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../../states/authUser/action';

function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(asyncRegisterUser({ name, email, password }));
        navigate('/');
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all hover:shadow-xl">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Create Account</h1>
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#7857ED] text-white p-3 rounded-lg hover:bg-[#6445d6] transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg font-medium"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-6 text-gray-600">
                    Already have an account? <a href="/" className="text-purple-600 hover:text-blue-700 font-medium">Login here</a>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;