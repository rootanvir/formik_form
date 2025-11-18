import React from 'react';
import Image from 'next/image';
import './globals.css'
import FormUp from './components/FormUpModal';
import Footer from './components/Footer';

const SignUpStructure = () => {
  return (
    <div>
      <Footer
        logoSrc="/Rectangle.png"
        description="Bangladesh's leading e-learning platform connecting students with expert mentors.Transform your career with our world-class courses and personalized mentoring "

        phone="+880 1712 345 678"
        email="support@mentorlagbe.com"
        address={<>House 123, Road 45<br />Gulshan-2, Dhaka 1212</>}

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
  );
};

export default SignUpStructure;