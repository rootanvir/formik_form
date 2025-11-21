'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import { LogIn, UserCog, Eye, EyeOff } from 'lucide-react';
import * as Yup from 'yup';
import SignUp from './SignUp';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Login:', values);
      alert('Login Successful!');
    },
  });

  return (
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] my-3 flex flex-col">
      <div className="grid grid-cols-2 flex-1 min-h-0">

        {/* LEFT – Promo (Same as SignUp) */}
        <div className="relative bg-gradient-to-br from-[#0e5ddd] to-[#3b82f6] 
                        flex flex-col items-center justify-center text-white p-6 lg:p-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
            <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/2 -left-10 w-40 h-1 bg-white rotate-45 blur-md"></div>
            <div className="absolute bottom-20 -right-10 w-52 h-1 bg-white -rotate-45 blur-md"></div>
          </div>

          <div className="text-center z-10">
            <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-2xl overflow-hidden mb-5 flex items-center justify-center">
              <Image src="/Mentor.png" alt="Mentor Lagbe" width={150} height={150} className="object-contain" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Start Your Learning Journey</h1>
            <p className="text-base opacity-90 leading-relaxed px-4">
              Join thousands of students and teachers in Bangladesh's leading e-learning platform for quality education and skill development.
            </p>
          </div>
        </div>

        {/* RIGHT – Login Form */}
        <div className="flex flex-col overflow-y-auto p-4 lg:p-6 min-h-0">
          <div className="max-w-md mx-auto w-full pb-4 ">

            {/* <button
              type="button"
              onClick={() => setShowSignup(true)}
              className={`flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all ${showSignup
                  ? 'bg-[#0e5ddd] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              <UserCog size={16} />
              Signup
            </button>

            <button
              type="button"
              className={`flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all ${!showSignup
                  ? 'bg-[#0e5ddd] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              <LogIn size={16} />
              Login
            </button> */}

            <h2 className="text-gray-800 text-2xl font-bold text-center mb-1 mt-35">Welcome Back</h2>
            <p className="text-center text-gray-600 mb-6 text-sm">
              Log in to continue your learning journey
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-4">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="example@mentorlagbe.com"
                  className={`w-full px-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5ddd] transition-all border border-transparent text-gray-700 ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Enter your password"
                    className={`w-full px-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5ddd] transition-all border border-transparent text-gray-700 pr-12 ${formik.touched.password && formik.errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />

                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-[#0e5ddd] rounded" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-red-600 hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0e5ddd] hover:bg-[#0d4bb5] text-white font-semibold py-3.5 rounded-xl transition duration-200"
              >
                Log In
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4 text-sm">
              Don't have an account? <button  className="text-[#0e5ddd] font-medium hover:underline">
                Sign Up
              </button>
            </p>

            <div className="mt-4 text-center">
              <div className="flex items-center text-gray-500 mb-3">
                <hr className="w-full border-gray-300" />
                <span className="px-3 text-xs font-medium">or</span>
                <hr className="w-full border-gray-300" />
              </div>
              <p className="text-xs text-gray-500 mb-3">For faster login use your social account</p>
              <div className="flex justify-center gap-5 mb-20">
                <button className="relative group p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all shadow-sm">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width={24} height={24} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Connect with Google
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-black"></span>
                  </span>
                </button>
                <button className="relative group p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all shadow-sm">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" width={24} height={24} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Connect with Facebook
                    <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-black"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;