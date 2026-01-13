import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo/nawasena new Logo symbol 1-01.png';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 h-20 md:h-24 bg-nawasena-cream/80 backdrop-blur-sm transition-all duration-300">
            {/* Left Side: Mobile Menu & Logo */}
            <div className="flex items-center h-full">
                <button className="md:hidden flex items-center gap-2 text-sm font-bold hover:opacity-70 transition-opacity mr-4">
                    <Menu className="w-6 h-6" strokeWidth={1.5} />
                </button>

                <a href="/" className="block h-full py-2">
                    <img src={logo} alt="Nawasena" className="h-full w-auto object-contain" />
                </a>
            </div>

            {/* Center: Desktop Nav */}
            <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8">
                <a href="#innovation" className="text-sm font-bold hover:opacity-70 transition-opacity">Innovation</a>
                <a href="#advisory" className="text-sm font-bold hover:opacity-70 transition-opacity">Advisory</a>
            </nav>

            {/* Right Side: CTA */}
            <div className="flex items-center justify-end">
                <a href="#contact" className="text-sm font-bold bg-nawasena-brown text-nawasena-cream px-6 py-2.5 rounded-full hover:bg-nawasena-brown/90 transition-colors">
                    Get in touch
                </a>
            </div>
        </header>
    );
};

export default Header;
