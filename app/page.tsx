// app/page.tsx or wherever you have SignUpStructure
'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Vortex } from '@/components/ui/vortex';
import SignUpModal from './components/SignUpModal'; // Make sure this has 'use client' inside it!
import './globals.css';

const SignUpStructure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* MAIN LAYOUT */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar — Now correctly opens modal */}
        <Navbar onSignUpClick={openModal} />

        {/* HERO SECTION */}
        <section className="relative w-full h-screen overflow-hidden">
          <Vortex
            backgroundColor="black"
            particleCount={800}
            rangeY={800}
            baseHue={220}
            className="flex flex-col items-center justify-center px-6 py-20 w-full h-full text-center"
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl">
              Join Mentor Lagbe
            </h1>
            <p className="text-white/90 text-lg md:text-2xl max-w-3xl mt-8">
              Learn from the best mentors. Transform your skills, career, and future — today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              {/* This button opens modal */}
              <button
                onClick={openModal}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-xl transition transform hover:scale-105"
              >
                Start Learning Free
              </button>
              <button className="px-10 py-5 border-2 border-white/60 text-white text-lg font-medium rounded-xl backdrop-blur-sm hover:bg-white/10 transition">
                Watch How It Works
              </button>
            </div>
          </Vortex>
        </section>
        <SignUpModal />
        {/* Footer */}
        <div className="border-t border-gray-800">
          <Footer
            logoSrc="/Rectangle.png"
            description="Bangladesh's leading e-learning platform connecting students with expert mentors. Transform your career with our world-class courses and personalized mentoring."
            phone="+880 1712 345 678"
            email="support@mentorlagbe.com"
            address={
              <>
                House 123, Road 45, Gulshan-2<br />
                Dhaka 1212, Bangladesh
              </>
            }
            facebook="https://facebook.com/mentorlagbe"
            twitter="https://twitter.com/mentorlagbe"
            instagram="https://instagram.com/mentorlagbe"
            youtube="https://youtube.com/mentorlagbe"
            linkedin="https://linkedin.com/company/mentorlagbe"
            quickLinks={[
              { title: "About Us", link: "/about" },
              { title: "All Courses", link: "/courses" },
              { title: "Live Batches", link: "/batches" },
              { title: "Find Teachers", link: "/teachers" },
              { title: "Success Stories", link: "/success" },
              { title: "Blog", link: "/blog" },
              { title: "Career", link: "/career" },
            ]}
            supportLinks={[
              { title: "Help Center", link: "/help" },
              { title: "Student Support", link: "/support/student" },
              { title: "Teacher Guidelines", link: "/guidelines/teacher" },
              { title: "Privacy Policy", link: "/privacy" },
              { title: "Terms of Service", link: "/terms" },
              { title: "Refund Policy", link: "/refund" },
              { title: "Community Guidelines", link: "/community" },
            ]}
            bottomLinks={[
              { title: "Privacy", link: "/privacy" },
              { title: "Terms", link: "/terms" },
              { title: "Cookies", link: "/cookies" },
              { title: "Accessibility", link: "/accessibility" },
            ]}
          />
        </div>
      </div>

      {/* MODAL — Opens from Navbar or Hero Button */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Transparent + Blur Background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" />

          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Red & Big) */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 z-50 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center justify-center transition hover:scale-110"
            >
              <span className="text-3xl font-bold">×</span>
            </button>

            {/* Your Modal Form */}
            <SignUpModal />
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpStructure;