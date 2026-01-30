import React, { useState, useEffect } from 'react';
import { services, categories } from '../data/mockData';
import ServiceCard from '../components/ui/ServiceCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

export default function Services() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category');
        const searchParam = params.get('search');

        if (categoryParam) {
            setSelectedCategory(categoryParam);
        }
        if (searchParam) {
            setSearchQuery(searchParam);
        }
    }, [location]);

    const filteredServices = services.filter(service => {
        const matchesCategory = selectedCategory === 'All' || service.categoryId === categories.find(c => c.name === selectedCategory)?.id;
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-dark-base min-h-screen py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white mb-2">Our Services</h1>
                        <p className="text-slate-400">Find the perfect futuristic solution for your home</p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-neon-blue transition-colors" />
                            <input
                                type="text"
                                placeholder="Search services..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-dark-card border border-dark-stroke text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="p-3 bg-dark-card border border-dark-stroke rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide">
                    <button
                        onClick={() => setSelectedCategory('All')}
                        className={clsx(
                            "px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all border",
                            selectedCategory === 'All'
                                ? "bg-neon-blue text-dark-base border-neon-blue shadow-[0_0_15px_rgba(76,110,255,0.4)]"
                                : "bg-transparent text-slate-400 border-dark-stroke hover:border-slate-500 hover:text-white"
                        )}
                    >
                        All Services
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.name)}
                            className={clsx(
                                "px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all border",
                                selectedCategory === cat.name
                                    ? "bg-neon-blue text-dark-base border-neon-blue shadow-[0_0_15px_rgba(76,110,255,0.4)]"
                                    : "bg-transparent text-slate-400 border-dark-stroke hover:border-slate-500 hover:text-white"
                            )}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
                            <p className="text-slate-500">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
