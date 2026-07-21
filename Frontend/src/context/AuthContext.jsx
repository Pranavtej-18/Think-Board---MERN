import {createContext, useContext, useEffect, useState} from 'react';
import axiosInstance from '../lib/axios';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');

            if(!token){
                setLoading(false);
                return;
            }

            try{
                const res = await axiosInstance.get("/auth/profile");
                setUser(res.data);
            }catch(error){
                console.error(error);

                localStorage.removeItem("token");
                setUser(null);
            }finally{
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };
    return (

        <AuthContext.Provider
            value={{
                user,
                setUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};