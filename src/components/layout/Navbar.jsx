import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, MapPin, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Premium', path: '/services?category=Premium' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-base/80 backdrop-blur-xl border-b border-dark-stroke">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex items-center gap-12">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
                            <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-blue rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(76,110,255,0.5)]">
                                <span className="text-white font-display font-bold text-2xl">A</span>
                            </div>
                            <span className="font-display font-bold text-2xl text-white tracking-tight">Aura</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-slate-300 font-medium hover:text-neon-cyan transition-colors text-sm uppercase tracking-wider"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Actions - Search & Profile */}
                    <div className="hidden md:flex items-center gap-6 flex-1 justify-end max-w-2xl">

                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-xs group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4 group-focus-within:text-neon-blue transition-colors" />
                            <input
                                type="text"
                                placeholder="Search services..."
                                className="w-full pl-10 pr-4 py-2 bg-dark-card border border-dark-stroke rounded-full text-sm text-white placeholder-slate-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-neon-pink rounded-full"></span>
                            </button>
                            <div className="w-9 h-9 bg-gradient-to-tr from-neon-purple to-neon-pink rounded-full p-[1px] cursor-pointer">
                                <div className="w-full h-full bg-dark-base rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    JD
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:bg-white/10 rounded-lg"
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
                        className="md:hidden bg-dark-base border-t border-dark-stroke overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search services"
                                    className="w-full pl-10 pr-4 py-3 bg-dark-card border border-dark-stroke rounded-xl text-white placeholder-slate-500"
                                />
                            </div>

                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-white/5 hover:text-neon-cyan"
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
