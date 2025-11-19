'use client';

import React from 'react';
import Image from 'next/image';
import { useFormik } from 'formik';
import { XCircle, LogIn, UserCog } from 'lucide-react';
import * as Yup from 'yup';

const SignUp = () => {
  const fieldSt = "text-gray-700 w-full px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e5ddd] transition-all duration-200 border border-transparent";
  const errorFieldSt = "border-red-500 focus:ring-red-500";

  const validationSchema = Yup.object({
    fullName: Yup.string()
  .required('Full name is required')
  .min(3, 'Name must be at least 3 characters')
  .matches(
    /^[A-Za-z. ]+$/,
    'Name can only contain letters, spaces, and dots (.)'
  ),
    age: Yup.number().required('Age is required').min(9).max(100),
    gender: Yup.string().oneOf(['male', 'female'], 'Select gender').required(),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^\+8801\d{9}$/, 'Enter valid 10-digit Bangladeshi number'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Password required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Submitted:', values);
      alert('Signup Successful!');
    },
  });

  return (
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[94vh] my-3 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 min-h-0">

          {/* LEFT – Promo */}
          <div className="relative bg-gradient-to-br from-[#0e5ddd] to-[#3b82f6] 
                          flex flex-col items-center justify-center text-white p-6 lg:p-10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
              <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-1/2 -left-10 w-40 h-1 bg-white rotate-45 blur-md"></div>
              <div className="absolute bottom-20 -right-10 w-52 h-1 bg-white -rotate-45 blur-md"></div>
            </div>

            <div className="text-center z-10">
              <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-2xl overflow-hidden mb-6 flex items-center justify-center">
                <Image src="/Mentor.png" alt="Mentor Lagbe" width={150} height={150} className="object-contain" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Start Your Learning Journey</h1>
              <p className="text-base opacity-90 leading-relaxed">
                Join thousands of students and teachers in Bangladesh's leading e-learning platform for quality education and skill development.
              </p>
            </div>
          </div>

          {/* RIGHT – Form */}
          <div className="flex flex-col overflow-y-auto p-5 lg:p-8">
            <div className="max-w-md mx-auto w-full">

              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-gray-100 rounded-full p-1 flex items-center">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0e5ddd] text-white rounded-full font-medium text-sm">
                    <LogIn size={18} />
                    <span>Signup</span>
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2.5 text-gray-600 rounded-full font-medium text-sm hover:text-gray-900">
                    <UserCog size={18} />
                    <span>Login</span>
                  </button>
                </div>
              </div>

              <h2 className="text-gray-800 text-2xl font-bold text-center mb-1.5">Create Your Account</h2>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Join <span className='text-blue-600 font-semibold'>Mentor Lagbe</span> and start learning today!
              </p>

              <form onSubmit={formik.handleSubmit} className="space-y-5">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    placeholder="Enter your full name"
                    className={`${fieldSt} ${formik.touched.fullName && formik.errors.fullName ? errorFieldSt : ''}`}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.fullName}</p>
                  )}
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      name="age"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.age}
                      placeholder="Enter your age"
                      className={`${fieldSt} ${formik.touched.age && formik.errors.age ? errorFieldSt : ''}`}
                    />
                    {formik.touched.age && formik.errors.age && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.age}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <div className="flex gap-6 mt-3">
                      {['male', 'female'].map((option) => (
                        <label key={option} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value={option}
                            checked={formik.values.gender === option}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-4 h-4 text-[#0e5ddd] focus:ring-[#0e5ddd]"
                          />
                          <span className="ml-2 text-gray-600 capitalize">{option}</span>
                        </label>
                      ))}
                    </div>
                    {formik.touched.gender && formik.errors.gender && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Phone Number - Simple & Working */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                        <Image
                          src="/bd.png"
                          alt="BD"
                          width={28}
                          height={28}
                          className=""
                        />
                        <span className="ml-2 text-gray-600 font-bold text-sm ">+880</span>
                      </div>

                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="XXXXXXXXXX"
                        className={`
                          ${fieldSt}
                          pl-22 pr-4
                          ${formik.touched.phone && formik.errors.phone ? errorFieldSt : ''}
                        `}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                          const display = digits ? ` ${digits}` : "";
                          e.target.value = display;
                          formik.setFieldValue("phone", digits.length === 10 ? `+880${digits}` : "");
                        }}
                        onBlur={formik.handleBlur}
                        maxLength={15}
                      />
                    </div>
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="example@gmail.com"
                      className={`${fieldSt} ${formik.touched.email && formik.errors.email ? errorFieldSt : ''}`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Create a strong password"
                    className={`${fieldSt} ${formik.touched.password && formik.errors.password ? errorFieldSt : ''}`}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    placeholder="Re-enter your password"
                    className={`${fieldSt} ${formik.touched.confirmPassword && formik.errors.confirmPassword ? errorFieldSt : ''}`}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0e5ddd] hover:bg-[#0d4bb5]  text-white font-semibold py-3.5 rounded-xl transition duration-200"
                >
                  <p>Continue</p>
                </button>
              </form>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Already have an account? <a href="#" className="text-[#0e5ddd] font-medium hover:underline">Log In</a>
              </p>

              <div className="mt-4 text-center pb-4">
                <div className="flex items-center text-gray-500 mb-3">
                  <hr className="w-full border-gray-300" />
                  <span className="px-4 text-xs font-medium">or</span>
                  <hr className="w-full border-gray-300" />
                </div>
                <p className="text-xs text-gray-500 mb-4">For faster login or signup use your social account</p>
                <div className="flex justify-center gap-5 mb-4">
                  <button className="p-3.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-all shadow-sm">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width={26} height={26} />
                  </button>
                  <button className="p-3.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-all shadow-sm">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" width={26} height={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignUp;