'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react'

interface NavbarProps {
    onSignUpClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignUpClick }) => {
    return (
        <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <div className="hidden md:flex items-center gap-8 text-gray-300">
                    <Link href="/courses" className="hover:text-blue-400 transition ">
                        Courses
                    </Link>
                    <Link href="/teachers" className="hover:text-blue-400 transition">
                        Find Teachers
                    </Link>
                    <Link href="/batches" className="hover:text-blue-400 transition">
                        Live Batches
                    </Link>
                    <Link href="/blog" className="hover:text-blue-400 transition">
                        Blog
                    </Link>
                    <Link href="/about" className="hover:text-blue-400 transition">
                        About
                    </Link>
                </div>

                <div className="flex items-center gap-10 ">
                    <Link href="https://github.com/rootanvir/formik_form" className="hover:text-blue-400 transition">
                        <div className='flex items-center gap-2'>
                            <Github
                                width={20}
                                height={20}
                            />
                            <p>Github</p>

                        </div>
                    </Link>
                    <button onClick={onSignUpClick} className='cursor-pointer hover:text-blue-500'>Sign Up</button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;