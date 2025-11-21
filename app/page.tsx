'use client';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Vortex } from '@/components/ui/vortex';
import SignUpModal from './components/SignUp';
import FloatingModal from './components/FloatingModal';
import './globals.css';
import Footer from './components/Footer';
import Login from './components/Login';
import AuthWrapper from './components/AuthModalContent';
import AuthModalContent from './components/AuthModalContent';

const SignUpStructure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative min-h-screen bg-gray-50">
        <Navbar onSignUpClick={openModal} />

        <section className="relative w-full h-screen">
          <Vortex
            backgroundColor="black"
            particleCount={700}
            rangeY={800}
            baseHue={220}
            className="flex flex-col items-center justify-center px-6 py-24 text-center h-full"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-5xl">
              Mentor Lagbe
            </h1>
            <p className="text-lg md:text-2xl text-white/80 mt-6 max-w-3xl">
              Learn from the best mentors. Transform your skills, career, and future — today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <button
                onClick={openModal}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-2xl transition hover:scale-105"
              >
                Start Learning Free
              </button>
              <button className="px-10 py-5 border-2 border-white/50 text-white text-lg font-medium rounded-xl hover:bg-white/10 transition">
                subscribe
              </button>
            </div>
          </Vortex>
        </section>
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


      <FloatingModal isOpen={isModalOpen} onClose={closeModal}>
        <AuthModalContent />
      </FloatingModal>
    </>
  );
};

export default SignUpStructure;
