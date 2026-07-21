import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axiosInstance from '../lib/axios';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try{
            await axiosInstance.post("/auth/register",{
                name,
                email,
                password,
            });

            toast.success("Registration successful!");

            navigate("/login");
        }catch(error){
            console.error(error);

            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleRegister}
                className="w-full max-w-md p-6 rounded-lg bg-zinc-900 shadow-lg"
            >
                <h1 className="text-3xl font-bold text-center mb-6">
                    Register
                </h1>

                <div className="mb-4">
                    <label>Name</label>
                    <input
                        type="text"
                        className="w-full p-2 rounded mt-1 text-white"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        className="w-full p-2 rounded mt-1 text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label>Password</label>
                    <input
                        type="password"
                        className="w-full p-2 rounded mt-1 text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
                >
                    Register
                </button>

                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-green-400 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
