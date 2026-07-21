import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {PlusIcon, LogOutIcon} from 'lucide-react'
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter'>Think Board</h1>
          <div className='flex items-center gap-4'>
            <Link to={"/create"} className='btn btn-primary'>
              <PlusIcon className="size-5"/>
              <span>New Note</span>
            </Link>
             <button
              onClick={handleLogout}
              className="btn btn-error"
            >
              <LogOutIcon className="size-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar