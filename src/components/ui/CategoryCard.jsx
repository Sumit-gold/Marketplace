import React from 'react';
import { motion } from 'framer-motion';

export default function CategoryCard({ category, onClick }) {
    const Icon = category.icon;

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 cursor-pointer transition-all flex flex-col items-center justify-center gap-4 group"
            onClick={onClick}
        >
            <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm`}>
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-slate-800 text-center group-hover:text-indigo-600 transition-colors">{category.name}</h3>
        </motion.div>
    );
}
