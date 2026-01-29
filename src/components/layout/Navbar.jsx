import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, MapPin, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [hoveredPath, setHoveredPath] = useState(location.pathname);

    // Urban Company style navigation - minimal links
    const navLinks = [
        { name: 'Homes', path: '/' },
        { name: 'Native', path: '/services' },
        { name: 'Beauty', path: '/services?category=Beauty' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex items-center gap-12">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
                            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                                <span className="text-white font-serif font-bold text-2xl">SG</span>
                            </div>
                            <span className="font-bold text-xl text-slate-900 tracking-tight">ServiGo</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-slate-800 font-medium hover:text-black transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Actions - Location & Search */}
                    <div className="hidden md:flex items-center gap-4 flex-1 justify-end max-w-3xl">

                        {/* Location Selector */}
                        <div className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors text-slate-700">
                            <MapPin className="w-5 h-5 text-slate-500" />
                            <span className="font-medium whitespace-nowrap">Chennai, India</span>
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                        </div>

                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for 'Massage' or 'Cleaning'"
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-300 shadow-sm"
                            />
                        </div>

                        <div className="flex items-center gap-4 ml-2">
                            <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors relative">
                                <Bell className="w-6 h-6" />
                            </button>
                            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 font-bold border border-slate-200 cursor-pointer">
                                JD
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-4">
                            {/* Mobile Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search services"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                                />
                            </div>

                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
