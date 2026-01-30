import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services, reviews } from '../data/mockData';
import { Star, Clock, Check, Shield, ChevronLeft, MapPin } from 'lucide-react';

export default function ServiceDetails() {
    const { id } = useParams();
    const service = services.find(s => s.id === id) || services[0];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Header */}
            <div className="relative h-[400px] w-full bg-slate-900">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            <ChevronLeft className="w-5 h-5 mr-1" /> Back to Services
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.name}</h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-bold text-lg">{service.rating}</span>
                                <span className="text-sm opacity-80">({service.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                <span>Insured & Vetted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Info */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">About this Service</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            {service.description}
                            We provide top-tier professionals who are rigorously trained and background checked.
                            Our goal is to ensure a seamless and high-quality experience for every booking.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="mt-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-green-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-slate-100 pt-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Customer Reviews</h2>
                            <div className="space-y-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center font-bold text-indigo-600">
                                                    {review.user[0]}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{review.user}</p>
                                                    <p className="text-xs text-slate-400">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-slate-600 pl-13">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                            <div className="bg-slate-50 p-6 border-b border-slate-100">
                                <p className="text-slate-500 text-sm font-medium mb-1">Starting from</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-slate-900">${service.price}</span>
                                    <span className="text-slate-400">/ service</span>
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-slate-400" />
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold uppercase">Duration</p>
                                        <p className="text-slate-700 font-medium">{service.duration}</p>
                                    </div>
                                </div>

                                <Link
                                    to={`/booking/${service.id}`}
                                    className="w-full block text-center bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl active:scale-95"
                                >
                                    Book Now
                                </Link>

                                <div className="text-center">
                                    <p className="text-xs text-slate-400 mb-2">100% Satisfaction Guaranteed</p>
                                    <div className="flex justify-center gap-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4 opacity-50" alt="" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4 opacity-50" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
