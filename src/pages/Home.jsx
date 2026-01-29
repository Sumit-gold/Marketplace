import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, heroCollageImages, smartProducts, popularServices } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Star, ArrowRight, Zap, BadgeCheck } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen pt-20">

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-8 pb-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Heading & Category Grid */}
                        <div className="relative z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-2"
                            >
                                Home services at your <br />
                                <span className="text-slate-900">doorstep</span>
                            </motion.h1>

                            {/* Category Selection Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-6 md:p-8"
                            >
                                <h2 className="text-xl font-bold text-slate-700 mb-6">What are you looking for?</h2>

                                <div className="grid grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-4">
                                    {categories.map((cat, idx) => {
                                        const Icon = cat.icon;
                                        return (
                                            <div
                                                key={cat.id}
                                                className="flex flex-col items-center gap-3 cursor-pointer group"
                                                onClick={() => navigate(`/services?category=${cat.name}`)}
                                            >
                                                <div className={`relative w-14 h-14 ${cat.color} bg-opacity-20 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                                                    <Icon className="w-7 h-7" />
                                                    {cat.badge && (
                                                        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                                                            {cat.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-xs font-medium text-slate-700 text-center leading-tight group-hover:text-black">{cat.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>

                            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium whitespace-nowrap overflow-x-auto scrollbar-hide">
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> SG Safe</span>
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 4.8+ Rated Pros</span>
                                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Insurance Protected</span>
                            </div>
                        </div>

                        {/* Right Column: Image Collage */}
                        <div className="relative hidden lg:block h-[600px]">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-4 pt-12"
                                >
                                    <img src={heroCollageImages[0]} className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="" />
                                    <img src={heroCollageImages[1]} className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-4"
                                >
                                    <img src={heroCollageImages[2]} className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="" />
                                    <img src={heroCollageImages[3]} className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Launch / Native Products Section */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">ServiGo Smart Products <span className="text-sm font-normal text-slate-500 ml-2">(New Launch)</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {smartProducts.map((product) => (
                            <div key={product.id} className="bg-black text-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl">
                                <div className="p-8 flex flex-col justify-center flex-1">
                                    <span className="text-xs font-bold bg-white/20 text-white w-fit px-2 py-1 rounded mb-4">NEW</span>
                                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                                    <p className="text-slate-400 mb-6">{product.description}</p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        <span className="text-xl font-bold">₹{product.price}</span>
                                        <button className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-1 relative h-64 md:h-auto">
                                    <img src={product.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Most Booked Services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Most Booked Services</h2>
                    <p className="text-slate-500 mb-8">Trusted by millions of customers</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularServices.map((service) => (
                            <div key={service.name} className="group cursor-pointer">
                                <div className="relative rounded-2xl overflow-hidden mb-4">
                                    <img src={service.image} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" alt="" />
                                    {service.discount && (
                                        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                                            {service.discount}
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-slate-900 line-clamp-1">{service.name}</h3>
                                    <div className="flex items-center gap-1 text-xs font-bold">
                                        <Star className="w-3 h-3 fill-black text-black" /> {service.rating}
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mb-2">{service.reviews} reviews</p>
                                <p className="text-sm font-bold text-black border border-slate-200 rounded px-2 py-1 w-fit">₹{service.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features / Quality Assurance */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-16">Why ServiGo?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <BadgeCheck className="w-10 h-10 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                            <p className="text-slate-600">See fixed prices before you book. No hidden charges.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <User className="w-10 h-10 text-slate-900" /> {/* User isn't imported from lucide properly in this scope if not added, checking imports */}
                            </div>
                            <h3 className="text-xl font-bold mb-3">Experts Only</h3>
                            <p className="text-slate-600">Our professionals are well trained and have on-job expertise.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <Zap className="w-10 h-10 text-slate-900" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Fully Equipped</h3>
                            <p className="text-slate-600">We bring everything needed to get the job done well.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Banner */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative rounded-3xl overflow-hidden bg-black text-white p-12 md:p-20 flex flex-col items-center text-center">
                        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Quality home services, on demand</h2>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Experienced, hand-picked Professionals to serve you at your doorstep</p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-100 transition-colors">
                                    Download App
                                </button>
                                <button onClick={() => navigate('/services')} className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                                    Book a Service
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper component for icon since I missed importing 'User' in the main function scope
function User({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    )
}
