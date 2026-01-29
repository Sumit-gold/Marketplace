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
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Our Services</h1>
                        <p className="text-slate-500">Find the perfect solution for your home</p>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search services..."
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-600">
                            <SlidersHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide">
                    <button
                        onClick={() => setSelectedCategory('All')}
                        className={clsx(
                            "px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all",
                            selectedCategory === 'All'
                                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
                        )}
                    >
                        All Services
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.name)}
                            className={clsx(
                                "px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all",
                                selectedCategory === cat.name
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                    : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
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
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No services found</h3>
                            <p className="text-slate-500">Try adjusting your search or filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
