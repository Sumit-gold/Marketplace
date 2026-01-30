import React from 'react';
import { motion } from 'framer-motion';
import { categories, heroCollageImages, smartProducts, popularServices } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Star, ArrowRight, Zap, BadgeCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="bg-dark-base min-h-screen pt-20 overflow-hidden relative">

            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-[800px] right-0 w-[800px] h-[600px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative pt-12 pb-24 lg:pt-32 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-neon-cyan" />
                            <span className="text-sm font-medium text-slate-300">The Future of Home Services is Here</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
                        >
                            Upgrade Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse">
                                Living Experience
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                        >
                            Instant access to top-tier professionals. From smart home setups to premium housekeeping. Safe, verified, and futuristic.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button onClick={() => navigate('/services')} className="px-8 py-4 bg-white text-dark-base font-bold rounded-xl hover:bg-neon-cyan transition-colors flex items-center gap-2">
                                Explore Services <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-md">
                                View Smart Products
                            </button>
                        </motion.div>
                    </div>

                    {/* Futuristic Floating Categories */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {categories.slice(0, 4).map((cat, idx) => {
                            const Icon = cat.icon;
                            return (
                                <div
                                    key={cat.id}
                                    onClick={() => navigate(`/services?category=${cat.name}`)}
                                    className="group relative h-48 rounded-3xl p-6 bg-dark-card border border-dark-stroke cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(76,110,255,0.3)]"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img src={cat.image} className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt={cat.name} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/80 to-transparent" />
                                    </div>

                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 text-white backdrop-blur-md border border-white/10 group-hover:bg-neon-blue group-hover:text-dark-base transition-colors`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-white mb-1 group-hover:text-neon-cyan transition-colors">{cat.name}</h3>
                                            <p className="text-xs text-slate-300">View Specialists</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Stats / Trust Strip */}
            <div className="border-y border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-slate-400">
                        <div className="flex items-center gap-3">
                            <Shield className="w-6 h-6 text-neon-green" /> {/* Assuming neon-green exists or handled by text color overrides */}
                            <span className="font-medium"><span className="text-white font-bold">100%</span> Verified Pros</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6 text-neon-blue" />
                            <span className="font-medium"><span className="text-white font-bold">10mins</span> Arrival Time</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star className="w-6 h-6 text-neon-purple" />
                            <span className="font-medium"><span className="text-white font-bold">4.9/5</span> Average Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Services */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Trending Now</h2>
                            <p className="text-slate-400">Most requested services by our premium members.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-neon-cyan font-bold hover:text-white transition-colors">
                            View All <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularServices.map((service) => (
                            <div key={service.id} className="group cursor-pointer">
                                <div className="relative rounded-3xl overflow-hidden mb-5 aspect-[4/3] border border-white/10">
                                    <img src={service.image} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 to-transparent opacity-60" />

                                    <div className="absolute top-4 right-4 bg-dark-base/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-neon-yellow text-neon-yellow" /> {service.rating}
                                    </div>

                                    {service.discount && (
                                        <div className="absolute top-4 left-4 bg-neon-pink text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,0,127,0.5)]">
                                            {service.discount}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{service.name}</h3>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">{service.reviews} reviews</span>
                                    <span className="text-lg font-bold text-white">₹{service.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smart Products Section */}
            <section className="py-24 bg-dark-lighter relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-purple/5 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-wider">Aura Exclusives</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">Smart Living Upgrades</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {smartProducts.map((product) => (
                            <div key={product.id} className="group relative bg-dark-card border border-dark-stroke rounded-[2rem] overflow-hidden hover:border-neon-purple/50 transition-all duration-500">
                                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                                    <div className="p-10 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                            <p className="text-slate-400 mb-6">{product.description}</p>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-white mb-6">₹{product.price}</div>
                                            <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-neon-cyan hover:text-white transition-all w-fit">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative h-64 lg:h-auto overflow-hidden">
                                        <img src={product.image} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="" />
                                        <div className="absolute inset-0 bg-neon-purple/10 mix-blend-overlay" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px]" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to upgrade your lifestyle?</h2>
                    <p className="text-xl text-slate-300 mb-12">Join 50,000+ members who trust Aura for their premium home services.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-neon-cyan transition-colors text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Get Started Now
                        </button>
                        <button className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg">
                            Download App
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
