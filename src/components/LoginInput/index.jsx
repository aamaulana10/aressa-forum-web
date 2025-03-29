import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

function LoginInput({ onSubmit }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={onEmailChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={onPasswordChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-[#7857ED] text-white p-3 rounded-lg hover:bg-[#6445d6] transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg font-medium"
            >
                Sign In
            </button>
        </form>
    )
}

LoginInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default LoginInput;