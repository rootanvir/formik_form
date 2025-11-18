import React, { FC } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, Heart } from 'lucide-react';

interface NavLink {
  title: string;
  link: string;
}

interface FooterProps {
  logoSrc: string;
  logoUrl?: string;
  description: string | React.ReactNode;

  phone: string;
  email: string;
  address: string | React.ReactNode;

  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  linkedin: string;

  quickLinks: NavLink[];
  supportLinks: NavLink[];
  bottomLinks: NavLink[];

  copyrightText?: string;
  madeWithText?: string;
}

const Footer: FC<FooterProps> = ({
  logoSrc,
  logoUrl = "/",
  description,
  phone,
  email,
  address,
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  quickLinks,
  supportLinks,
  bottomLinks,
  copyrightText = "© 2025 Mentor Lagbe. All rights reserved.",
  madeWithText = "Made with Love ❤️ in Bangladesh",
}) => {
  const socialLinks = [
    { Icon: Facebook, url: facebook },
    { Icon: Twitter, url: twitter },
    { Icon: Instagram, url: instagram },
    { Icon: Youtube, url: youtube },
    { Icon: Linkedin, url: linkedin },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand & Social */}
          <div className="flex flex-col mr-10">
            <div className="mb-6">
              <a href={logoUrl}>
                <Image
                  src={logoSrc}
                  alt="Mentor Lagbe Logo"
                  width={90}
                  height={90}
                  className="rounded-lg hover:opacity-90 transition"
                />
              </a>
            </div>
            <p className="text-md leading-relaxed text-gray-400 mb-6">
              {description}
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ title, link }) => (
                <li key={title}>
                  <a href={link} className="hover:text-blue-400 transition-colors duration-200 text-gray-400 block">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Policies */}
          <div>
            <h3 className="text-blue-400 font-semibold text-lg mb-5">Support & Policies</h3>
            <ul className="space-y-3">
              {supportLinks.map(({ title, link }) => (
                <li key={title}>
                  <a href={link} className="hover:text-blue-400 transition-colors duration-200 text-gray-400 block">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-blue-400 font-semibold text-lg mb-5">Contact Us</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-colors-gray-300" />
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-blue-400">{phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-300" />
                  <a href={`mailto:${email}`} className="hover:text-blue-400">{email}</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-300 mt-1" />
                  <span>{address}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-blue-400 font-medium mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Get updates on new courses & exclusive offers</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white hover:bg-gray-300 text-black font-semibold rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            {copyrightText} | {madeWithText}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {bottomLinks.map(({ title, link }) => (
              <a
                key={title}
                href={link}
                className="hover:text-blue-400 transition-colors"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;