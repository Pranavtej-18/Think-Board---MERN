import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import axiosInstance from "../lib/axios";
import { useAuth } from "../context/AuthContext";
import toast from 'react-hot-toast'


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {setUser} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try{
            const res = await axiosInstance.post("/auth/login", {
                email, password,
            });
    
            localStorage.setItem("token", res.data.token);
            
            setUser(res.data);
            toast.success("Login successful!");
            navigate("/");
        }catch(error){
            console.error(error);
            toast.error(error.response?.data?.message || "Login failed");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form 
                onSubmit={handleLogin} 
                className="w-full max-w-md p-6 rounded-lg bg-zinc-900 shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                <div className="mb-4">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="w-full p-2 rounded mt-1 text-white"
                        value={email} 
                        onChange={(e) =>setEmail(e.target.value)}
                     />
                </div>

                <div className="mb-6">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="w-full p-2 rounded mt-1 text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 py-2 rounded hover:bg-green-600"
                    >
                    Login
                </button>
                    <p className="text-center mt-4">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-green-400 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
            </form>
        </div>
    )
}


export default LoginPage;