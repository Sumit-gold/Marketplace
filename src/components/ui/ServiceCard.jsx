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
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group relative"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 w-full px-4 flex justify-between items-start">
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={handleLike}
                        className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${isLiked ? 'bg-red-50 text-red-500' : 'bg-white/90 text-slate-400 hover:bg-white hover:text-red-500'}`}
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    </motion.button>

                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold text-slate-800">{service.rating}</span>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.name}
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {service.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                    </div>
                    <div className="font-semibold text-slate-900 bg-green-50 text-green-700 px-2 py-1 rounded">
                        ${service.price}
                    </div>
                </div>

                <Link
                    to={`/service/${service.id}`}
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
                    >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
