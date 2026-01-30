import React, { useState } from 'react';
import { Star, Clock, ArrowRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

export default function ServiceCard({ service }) {
    const [isLiked, setIsLiked] = useState(false);
    const { addToast } = useToast();

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLiked(!isLiked);
        if (!isLiked) {
            addToast(`Added ${service.name} to favorites!`, 'success');
        } else {
            addToast(`Removed from favorites`, 'info');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-dark-card rounded-3xl overflow-hidden border border-dark-stroke hover:border-neon-purple/50 hover:shadow-[0_0_20px_rgba(176,38,255,0.2)] transition-all duration-300"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base to-transparent opacity-60" />

                <div className="absolute top-4 w-full px-4 flex justify-between items-start">
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={handleLike}
                        className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${isLiked ? 'bg-neon-pink text-white' : 'bg-dark-base/50 text-slate-400 hover:bg-white hover:text-neon-pink'}`}
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    </motion.button>

                    <div className="bg-dark-base/80 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
                        <Star className="w-4 h-4 text-neon-yellow fill-neon-yellow" />
                        <span className="text-sm font-semibold text-white">{service.rating}</span>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {service.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {service.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/5">
                        <Clock className="w-4 h-4 text-neon-blue" />
                        <span>{service.duration}</span>
                    </div>
                    <div className="font-bold text-white bg-neon-green/20 text-neon-green px-2 py-1 rounded">
                        ${service.price}
                    </div>
                </div>

                <Link
                    to={`/service/${service.id}`}
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-neon-cyan hover:text-white transition-all duration-300"
                    >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
