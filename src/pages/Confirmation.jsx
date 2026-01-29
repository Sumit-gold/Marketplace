import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Home, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Confirmation() {
    const location = useLocation();
    const { service } = location.state || { service: { name: 'Service' } };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 overflow-hidden relative">
            {/* Background Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: -100,
                        rotate: 360
                    }}
                    transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    className="absolute w-2 h-2 bg-indigo-200 rounded-full"
                />
            ))}

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="bg-white max-w-md w-full rounded-3xl p-8 shadow-xl text-center border border-slate-100 relative z-10"
            >
                <div className="relative inline-block mb-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
                    >
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="absolute inset-0 bg-green-200 rounded-full"
                    />
                </div>

                <h1 className="text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h1>
                <p className="text-slate-500 mb-8">
                    Your booking for <span className="font-semibold text-slate-900">{service.name}</span> has been successfully placed. We'll send you a confirmation email shortly.
                </p>

                <div className="space-y-3">
                    <Link
                        to="/dashboard"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                        >
                            View Bookings
                        </motion.button>
                    </Link>
                    <Link
                        to="/"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "#f1f5f9" }}
                            whileTap={{ scale: 0.98 }}
                            className="block w-full bg-slate-50 text-slate-700 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                        >
                            <Home className="w-4 h-4" /> Go Home
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
