import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/mockData';
import {
    Check, Calendar, MapPin, CreditCard, ChevronRight, ChevronLeft,
    ShieldCheck, User, Clock, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useToast } from '../context/ToastContext';

export default function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToast } = useToast();
    const service = services.find(s => s.id === id) || services[0];

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        address: '',
        notes: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const updateForm = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const steps = [
        { id: 1, title: 'Schedule', icon: Calendar },
        { id: 2, title: 'Details', icon: MapPin },
        { id: 3, title: 'Confirm', icon: FileText },
        { id: 4, title: 'Payment', icon: CreditCard },
    ];

    const handleNext = () => {
        if (step === 1 && (!formData.date || !formData.time)) {
            addToast("Please select a date and time", "error");
            return;
        }
        if (step === 2 && !formData.address) {
            addToast("Please enter your address", "error");
            return;
        }
        setStep(prev => prev + 1);
    };

    const handleBack = () => setStep(prev => prev - 1);

    const handlePayment = () => {
        if (!formData.cardNumber || !formData.expiry || !formData.cvc) {
            addToast("Please enter card details", "error");
            return;
        }
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/confirmation', { state: { service, bookingDetails: formData } });
            addToast("Payment Successful!", "success");
        }, 2000);
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-8 pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex items-center justify-between max-w-3xl mx-auto relative">
                        {/* Connecting Line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full"></div>
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 -z-10 rounded-full transition-all duration-500"
                            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                        ></div>

                        {steps.map((s) => (
                            <div key={s.id} className="flex flex-col items-center gap-2 bg-slate-50 px-2">
                                <div
                                    className={clsx(
                                        "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ring-4 ring-slate-50",
                                        step >= s.id ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "bg-white text-slate-400 border border-slate-200"
                                    )}
                                >
                                    {step > s.id ? <Check className="w-5 h-5" /> : <s.icon className="w-4 h-4" />}
                                </div>
                                <span className={clsx(
                                    "text-xs font-semibold transition-colors uppercase tracking-wide",
                                    step >= s.id ? "text-indigo-600" : "text-slate-400"
                                )}>{s.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Main Step Content */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 min-h-[500px]"
                            >
                                {step === 1 && (
                                    <div className="space-y-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Select Date</h2>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {['Today', 'Tomorrow', 'Wed, 30', 'Thu, 31', 'Fri, 01', 'Sat, 02'].map((d) => (
                                                    <button
                                                        key={d}
                                                        onClick={() => updateForm('date', d)}
                                                        className={clsx(
                                                            "p-4 rounded-2xl border transition-all text-center hover:border-indigo-300",
                                                            formData.date === d
                                                                ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-bold shadow-sm"
                                                                : "border-slate-200 text-slate-600"
                                                        )}
                                                    >
                                                        {d}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Select Time</h2>
                                            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                                                {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '04:00 PM'].map((t) => (
                                                    <button
                                                        key={t}
                                                        onClick={() => updateForm('time', t)}
                                                        className={clsx(
                                                            "p-3 rounded-xl border text-sm font-medium transition-all hover:border-indigo-300",
                                                            formData.time === t
                                                                ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm"
                                                                : "border-slate-200 text-slate-600"
                                                        )}
                                                    >
                                                        {t}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-slate-900">Service Location</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Address</label>
                                                <textarea
                                                    value={formData.address}
                                                    onChange={(e) => updateForm('address', e.target.value)}
                                                    placeholder="House No, Building, Street, Area"
                                                    rows="3"
                                                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Instructions (Optional)</label>
                                                <textarea
                                                    value={formData.notes}
                                                    onChange={(e) => updateForm('notes', e.target.value)}
                                                    placeholder="Eg: Landmark, Gate code, Pet alerts..."
                                                    rows="2"
                                                    className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                                />
                                            </div>
                                            <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl text-yellow-800 text-sm">
                                                <ShieldCheck className="w-5 h-5" />
                                                This service is insured up to $5000 against damages.
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-slate-900">Review Booking</h2>
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                                    <Calendar className="w-6 h-6 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Date & Time</p>
                                                    <p className="font-bold text-slate-900">{formData.date} at {formData.time}</p>
                                                </div>
                                            </div>
                                            <div className="w-full h-px bg-slate-200"></div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                                    <MapPin className="w-6 h-6 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Address</p>
                                                    <p className="font-bold text-slate-900">{formData.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-xl border border-slate-200 flex items-start gap-4">
                                            <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" defaultChecked />
                                            <p className="text-sm text-slate-600">
                                                I agree to the Terms of Service and Cancellation Policy.
                                                Cancel up to 2 hours before for a full refund.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {step === 4 && (
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-bold text-slate-900">Secure Payment</h2>
                                        <div className="p-6 border border-indigo-100 bg-indigo-50/50 rounded-2xl mb-6">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="font-semibold text-slate-700">Total Amount</span>
                                                <span className="text-3xl font-bold text-indigo-600">${service.price + 2}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-indigo-600">
                                                <ShieldCheck className="w-4 h-4" />
                                                <span>256-bit SSL Encrypted Transaction</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
                                                <div className="relative">
                                                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                                    <input
                                                        type="text"
                                                        maxLength="16"
                                                        placeholder="0000 0000 0000 0000"
                                                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                                                        value={formData.cardNumber}
                                                        onChange={(e) => updateForm('cardNumber', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-2">Expiry Date</label>
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        maxLength="5"
                                                        className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                                                        value={formData.expiry}
                                                        onChange={(e) => updateForm('expiry', e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-2">CVC</label>
                                                    <input
                                                        type="text"
                                                        placeholder="123"
                                                        maxLength="3"
                                                        className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                                                        value={formData.cvc}
                                                        onChange={(e) => updateForm('cvc', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-700 mb-2">Cardholder Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="JOHN DOE"
                                                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    value={formData.cardName}
                                                    onChange={(e) => updateForm('cardName', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center mt-8">
                            {step > 1 ? (
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" /> Back
                                </button>
                            ) : <div></div>}

                            {step < 4 ? (
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
                                >
                                    Continue <ChevronRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={handlePayment}
                                    disabled={loading}
                                    className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95 disabled:opacity-70 disabled:scale-100"
                                >
                                    {loading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>Pay ${service.price + 2} <ShieldCheck className="w-5 h-5" /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 sticky top-24">
                            <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">Order Summary</h3>

                            <div className="flex gap-4 mb-6">
                                <img src={service.image} alt="" className="w-20 h-20 rounded-xl object-cover shadow-sm" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{service.name}</h4>
                                    <div className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                                        <Clock className="w-3 h-3" /> {service.duration}
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-yellow-500 mt-1 font-medium">
                                        ★ {service.rating} ({service.reviews})
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-slate-600">
                                    <span>Service Total</span>
                                    <span className="font-semibold">${service.price}</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Convenience Fee</span>
                                    <span className="font-semibold">$2.00</span>
                                </div>
                                <div className="flex justify-between text-green-600 text-sm">
                                    <span>Discount (First User)</span>
                                    <span className="font-semibold">-$0.00</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-4 flex justify-between items-center mb-6">
                                <span className="font-bold text-slate-900 text-lg">Total</span>
                                <span className="font-bold text-2xl text-indigo-600">${service.price + 2}</span>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
                                <p className="mb-2"><span className="font-bold text-slate-700">Free Cancellation</span> until 2 hours before the start time.</p>
                                <p>Prices are final and include all taxes.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
