import React from 'react';
import { Calendar, Clock, MapPin, User, Settings, LogOut } from 'lucide-react';
import { services } from '../data/mockData';

export default function Dashboard() {
    const upcomingBookings = [
        { id: 'b1', service: services[0], date: 'Tomorrow, 29 Jan', time: '10:00 AM', status: 'Confirmed' }
    ];

    const pastBookings = [
        { id: 'b2', service: services[1], date: '15 Jan 2024', time: '02:00 PM', status: 'Completed' },
        { id: 'b3', service: services[2], date: '10 Jan 2024', time: '11:00 AM', status: 'Completed' }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-8">My Dashboard</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-6 text-center border-b border-slate-100">
                                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-2xl mx-auto mb-4">
                                    JD
                                </div>
                                <h2 className="font-bold text-slate-900">John Doe</h2>
                                <p className="text-sm text-slate-500">john.doe@example.com</p>
                            </div>
                            <div className="p-4">
                                <nav className="space-y-1">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-xl font-medium">
                                        <Calendar className="w-5 h-5" /> My Bookings
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
                                        <User className="w-5 h-5" /> Profile
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
                                        <Settings className="w-5 h-5" /> Settings
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors mt-8">
                                        <LogOut className="w-5 h-5" /> Logout
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Upcoming */}
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 mb-4">Upcoming Bookings</h2>
                            <div className="space-y-4">
                                {upcomingBookings.map((booking) => (
                                    <div key={booking.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                                        <img src={booking.service.image} alt="" className="w-24 h-24 rounded-xl object-cover" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-lg text-slate-900">{booking.service.name}</h3>
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" /> {booking.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" /> {booking.time}
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="px-4 py-2 border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors text-sm">
                                                    Reschedule
                                                </button>
                                                <button className="px-4 py-2 border border-slate-200 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors text-sm">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Past */}
                        <section>
                            <h2 className="text-lg font-bold text-slate-900 mb-4">Past Bookings</h2>
                            <div className="space-y-4">
                                {pastBookings.map((booking) => (
                                    <div key={booking.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                                        <img src={booking.service.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-slate-900">{booking.service.name}</h3>
                                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-500 mb-3">
                                                {booking.date} • ${booking.service.price}
                                            </p>
                                            <button className="text-indigo-600 text-sm font-medium hover:underline">
                                                Book Again
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
