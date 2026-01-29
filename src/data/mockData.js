import { Home, Zap, PenTool, Truck, Sparkles, User, Star, Clock, MapPin, Wrench, Droplets, Lock, Smartphone, ShieldCheck } from 'lucide-react';

// Main Categories for the Hero Section
export const categories = [
    { id: '1', name: "Women's Salon & Spa", icon: User, color: 'bg-pink-50 text-pink-600', badge: 'New' },
    { id: '2', name: "Men's Salon & Massage", icon: User, color: 'bg-slate-50 text-slate-600' },
    { id: '3', name: "AC & Appliance Repair", icon: Wrench, color: 'bg-blue-50 text-blue-600' },
    { id: '4', name: "Cleaning & Pest Control", icon: Sparkles, color: 'bg-purple-50 text-purple-600' },
    { id: '5', name: "Electrician, Plumber & Carpenter", icon: Zap, color: 'bg-yellow-50 text-yellow-600' },
    { id: '6', name: "ServiGo Water Purifier", icon: Droplets, color: 'bg-cyan-50 text-cyan-600' },
    { id: '7', name: "Painting & Waterproofing", icon: PenTool, color: 'bg-green-50 text-green-600' },
    { id: '8', name: "ServiGo Smart Locks", icon: Lock, color: 'bg-gray-50 text-gray-800', badge: 'Sale' },
];

export const heroCollageImages = [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop", // Spa/Massage
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", // Electrician/Repair
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop", // Salon/Haircut
    "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=800&auto=format&fit=crop"  // Cleaning/Worker
];

// Grouped Services for Homepage Sections
export const popularServices = [
    {
        id: 'p1',
        name: 'Power Saver AC Service',
        rating: '4.8',
        reviews: '12k',
        price: 199,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
        discount: '15% OFF'
    },
    {
        id: 'p2',
        name: 'Intense Bathroom Cleaning',
        rating: '4.7',
        reviews: '8.5k',
        price: 499,
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop', // Keep checking this one, if broken switch to: https://images.unsplash.com/photo-1527515673516-75c44e9b95ba
    },
    {
        id: 'p3',
        name: 'Sofa Cleaning',
        rating: '4.9',
        reviews: '23k',
        price: 799,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 'p4',
        name: 'Kitchen Deep Cleaning',
        rating: '4.8',
        reviews: '5k',
        price: 999,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=600&auto=format&fit=crop',
    }
];

export const smartProducts = [
    {
        id: 'sp1',
        name: 'ServiGo Smart Lock M1',
        description: 'Fingerprint, Passcode & Mobile access',
        price: 9999,
        image: 'https://images.unsplash.com/photo-1558002038-109177381792?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'sp2',
        name: 'ServiGo RO Water Purifier',
        description: 'Copper charged RO+UV+UF',
        price: 14999,
        image: 'https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?q=80&w=600&auto=format&fit=crop'
    }
];

// All Services for listing page
export const services = [
    {
        id: 's1',
        categoryId: '4',
        name: 'Deep Home Cleaning',
        description: 'Complete home cleaning service including floor, bathroom, and kitchen.',
        price: 89,
        rating: 4.8,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1000&auto=format&fit=crop',
        duration: '3-4 hours',
        features: ['Eco-friendly products', 'Trusted professionals', 'Insurance included']
    },
    {
        id: 's2',
        categoryId: '3',
        name: 'AC Service & Repair',
        description: 'Professional AC servicing to ensure cooling efficiency.',
        price: 45,
        rating: 4.7,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
        duration: '1 hour',
        features: ['30-day warranty', 'Gas refilling available']
    },
    {
        id: 's3',
        categoryId: '2',
        name: 'Men\'s Haircut & Grooming',
        description: 'Premium haircut and grooming at your doorstep.',
        price: 25,
        rating: 4.9,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=1000&auto=format&fit=crop',
        duration: '45 mins',
        features: ['Hygenic tools', 'Top stylists']
    },
    {
        id: 's4',
        categoryId: '7',
        name: 'Full House Painting',
        description: 'Express painting service with dust-free experience.',
        price: 499,
        rating: 4.6,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1000&auto=format&fit=crop',
        duration: '2-3 days',
        features: ['Color consultation', 'Post-service cleanup']
    },
    {
        id: 's5',
        categoryId: '1',
        name: 'Women\'s Spa Package',
        description: 'Relaxing spa package including massage and facial.',
        price: 120,
        rating: 4.9,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop',
        duration: '2 hours',
        features: ['Aromatic oils', 'Certified therapists']
    },
    // NEW SERVICES START HERE
    {
        id: 's6',
        categoryId: '4',
        name: 'Sofa Deep Cleaning',
        description: 'Shampooing and deep vacuuming for your sofas and cushions.',
        price: 40,
        rating: 4.8,
        reviews: 85,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
        duration: '1.5 hours',
        features: ['Fabric protection', 'Stain removal']
    },
    {
        id: 's7',
        categoryId: '3',
        name: 'Refrigerator Repair',
        description: 'Expert repair for single and double door refrigerators.',
        price: 50,
        rating: 4.7,
        reviews: 62,
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop', // Stock kitchen/appliance
        duration: '1-2 hours',
        features: ['Original parts', '30-day warranty']
    },
    {
        id: 's8',
        categoryId: '5',
        name: 'Electrician Services',
        description: 'Fixing wiring, switches, and installing new electrical points.',
        price: 30,
        rating: 4.6,
        reviews: 150,
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop',
        duration: '1 hour',
        features: ['Safety checks', 'Certified electricians']
    },
    {
        id: 's9',
        categoryId: '5',
        name: 'Plumbing Services',
        description: 'Leak repairs, tap installation, and pipe fitting solutions.',
        price: 35,
        rating: 4.5,
        reviews: 130,
        image: 'https://images.unsplash.com/photo-1505798577917-a651a5d40320?q=80&w=1000&auto=format&fit=crop',
        duration: '1 hour',
        features: ['Leak detection', 'Fast service']
    },
    {
        id: 's10',
        categoryId: '2',
        name: 'Men\'s Massage Therapy',
        description: 'Deep tissue and relaxation massage for stress relief.',
        price: 60,
        rating: 4.8,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop',
        duration: '60 mins',
        features: ['Essential oils', 'Pain relief']
    },
    {
        id: 's11',
        categoryId: '1',
        name: 'Manicure & Pedicure',
        description: 'Classic manicure and pedicure services at home.',
        price: 45,
        rating: 4.7,
        reviews: 200,
        image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1000&auto=format&fit=crop',
        duration: '1.5 hours',
        features: ['Premium polish', 'Relaxing foot massage']
    },
    {
        id: 's12',
        categoryId: '4',
        name: 'Bathroom Deep Cleaning',
        description: 'Intense scrubbing and sanitization of bathroom tiles and fittings.',
        price: 35,
        rating: 4.8,
        reviews: 180,
        image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
        duration: '1 hour',
        features: ['Anti-bacterial', 'Scale removal']
    },
    {
        id: 's13',
        categoryId: '3',
        name: 'Washing Machine Repair',
        description: 'Diagnosis and repair for top and front load washing machines.',
        price: 55,
        rating: 4.6,
        reviews: 70,
        image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1000&auto=format&fit=crop',
        duration: '1-2 hours',
        features: ['Drum cleaning', 'Motor repair']
    },
    {
        id: 's14',
        categoryId: '7',
        name: 'Waterproofing Solutions',
        description: 'Professional waterproofing for terraces and walls.',
        price: 300,
        rating: 4.9,
        reviews: 40,
        image: 'https://images.unsplash.com/photo-1632759868160-c651ac8b6408?q=80&w=1000&auto=format&fit=crop', // Generic construction/repair
        duration: 'Multi-day',
        features: ['5-year warranty', 'Leak proof']
    },
    {
        id: 's15',
        categoryId: '6',
        name: 'RO Water Purifier Service',
        description: 'Filter change and maintenance for all RO brands.',
        price: 25,
        rating: 4.7,
        reviews: 110,
        image: 'https://images.unsplash.com/photo-1521921313612-e806df8cc1c7?q=80&w=1000&auto=format&fit=crop', // Clean water concept
        duration: '45 mins',
        features: ['TDS check', 'Filter replacement']
    },
    {
        id: 's16',
        categoryId: '5',
        name: 'Carpenter Services',
        description: 'Furniture repair, assembly, and custom woodwork.',
        price: 40,
        rating: 4.5,
        reviews: 90,
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop',
        duration: 'Variable',
        features: ['Custom work', 'Damage repair']
    },
    {
        id: 's17',
        categoryId: '4',
        name: 'Kitchen Deep Cleaning',
        description: 'Oil and grease removal from kitchen slabs, chimneys, and cabinets.',
        price: 60,
        rating: 4.8,
        reviews: 140,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop',
        duration: '2 hours',
        features: ['Chimney cleaning', 'Floor scrubbing']
    },
    {
        id: 's18',
        categoryId: '1',
        name: 'Facial & Cleanup',
        description: 'Rejuvenating facials for glowing skin at home.',
        price: 50,
        rating: 4.8,
        reviews: 250,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
        duration: '1 hour',
        features: ['Organic products', 'Skin analysis']
    },
    {
        id: 's19',
        categoryId: '8',
        name: 'Smart Lock Installation',
        description: 'Installation and setup of ServiGo Smart Locks.',
        price: 20,
        rating: 4.9,
        reviews: 30,
        image: 'https://images.unsplash.com/photo-1558002038-109177381792?q=80&w=1000&auto=format&fit=crop',
        duration: '1 hour',
        features: ['Demo included', 'App setup']
    },
    {
        id: 's20',
        categoryId: '4',
        name: 'Pest Control Services',
        description: 'Effective treatment for cockroaches, ants, and termites.',
        price: 45,
        rating: 4.6,
        reviews: 100,
        image: 'https://images.unsplash.com/photo-1633534976781-a3962e226164?q=80&w=1000&auto=format&fit=crop', // Abstract clean/safe
        duration: '1 hour',
        features: ['Odorless', 'Child safe']
    },
    {
        id: 's21',
        categoryId: '3',
        name: 'Microwave Repair',
        description: 'Fixing heating issues and panel problems for microwaves.',
        price: 35,
        rating: 4.5,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=1000&auto=format&fit=crop',
        duration: '1 hour',
        features: ['Magnetron check', 'Door repair']
    },
    {
        id: 's22',
        categoryId: '2',
        name: 'Beard Grooming & Shave',
        description: 'Professional beard styling and clean shave.',
        price: 15,
        rating: 4.8,
        reviews: 160,
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop',
        duration: '30 mins',
        features: ['Hot towel', 'Aftershave']
    },
    {
        id: 's23',
        categoryId: '5',
        name: 'Drill & Hang',
        description: 'Mounting TVs, paintings, and shelves securely.',
        price: 15,
        rating: 4.7,
        reviews: 80,
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop',
        duration: '30 mins',
        features: ['Laser level', 'Clean finish']
    },
    {
        id: 's24',
        categoryId: '7',
        name: 'Wall Texture Painting',
        description: 'Modern texture designs for a feature wall.',
        price: 150,
        rating: 4.8,
        reviews: 25,
        image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=1000&auto=format&fit=crop',
        duration: '1 day',
        features: ['Unique designs', 'Metalic finish']
    },
    {
        id: 's25',
        categoryId: '1',
        name: 'Hair Color & Styling',
        description: 'Global hair color and premium styling services.',
        price: 80,
        rating: 4.7,
        reviews: 90,
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
        duration: '2-3 hours',
        features: ['Ammonia free', 'Bouncy blowdry']
    }
];

export const reviews = [
    {
        id: 'r1',
        user: 'Alex Johnson',
        rating: 5,
        comment: 'Amazing service! The team was on time and very professional.',
        date: '2 days ago'
    },
    // ...
];
