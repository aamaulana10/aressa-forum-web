import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../../states/authUser/action';
import LoginInput from '../../components/LoginInput';

function LoginPage() {
    const dispatch = useDispatch();

    const onSubmit = async ({ email, password }) => {
        dispatch(asyncSetAuthUser({ email, password }));
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all hover:shadow-xl">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Welcome Back</h1>
                <LoginInput onSubmit={onSubmit} />
                <p className="text-center mt-6 text-gray-600">
                    Don't have an account? <a href="/register" className="text-purple-600 hover:text-blue-700 font-medium">Register here</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;