'use client';

import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { UserCog, LogIn } from 'lucide-react';

const AuthModalContent = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="relative">

      {/* Toggle Button — Fully Responsive */}
      <div
        className="absolute z-50 
          top-5 right-10
          sm:top-8 sm:right-50
          lg:top-8 lg:right-70
          xl:top-8 xl:right-70
        "
      >
        <div className="bg-white rounded-full p-1 flex border border-gray-200 ">
          {/* Signup Button */}
          <button
            onClick={() => setIsLogin(false)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm
              transition-all duration-300 ease-out
              ${!isLogin
                ? 'bg-gradient-to-r from-[#0e5ddd] to-[#2563eb] text-white shadow-lg shadow-blue-500/30 scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }
            `}
          >
            <UserCog size={15} />
            <span className="hidden sm:inline">Signup</span> 
            <span className="sm:hidden">Sign Up</span>       
          </button>

          {/* Login Button */}
          <button
            onClick={() => setIsLogin(true)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm
              transition-all duration-300 ease-out
              ${isLogin
                ? 'bg-gradient-to-r from-[#0e5ddd] to-[#2563eb] text-white shadow-lg shadow-blue-500/30 scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }
            `}
          >
            <LogIn size={15} />
            <span className="hidden sm:inline">Login</span>
            <span className="sm:hidden">Log In</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="transition-opacity duration-500 ease-in-out">
        {isLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthModalContent;