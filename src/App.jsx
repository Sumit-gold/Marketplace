import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import { ToastProvider } from './context/ToastContext';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <ToastProvider>
            <Router>
                <ScrollToTop />
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/service/:id" element={<ServiceDetails />} />
                        <Route path="/booking/:id" element={<Booking />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </MainLayout>
            </Router>
        </ToastProvider>
    );
}

export default App;
