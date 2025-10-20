import React from 'react';
import { Home, User, Palette } from 'lucide-react';

export default function LinkTree() {
    const links = [
        {
            title: 'Chorvinsky Smart Homes',
            url: 'https://smarthomes.chorvinsky.com',
            icon: <Home className="w-5 h-5" />,
            description: 'Smart home solutions'
        },
        {
            title: 'David Chorvinsky',
            url: 'https://david.chorvinsky.com',
            icon: <User className="w-5 h-5" />,
            description: 'Personal website'
        },
        {
            title: 'Liz Chorvinsky',
            url: 'https://liz.chorvinsky.com',
            icon: <User className="w-5 h-5" />,
            description: 'Personal website'
        },
        {
            title: 'Chorvinsky Studios',
            url: 'https://studio.chorvinsky.com',
            icon: <Palette className="w-5 h-5" />,
            description: 'Creative studio'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Profile Section */}
                <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-white text-3xl font-bold">C</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Chorvinsky</h1>
                    <p className="text-gray-600">Connect with us</p>
                </div>

                {/* Links */}
                <div className="space-y-4">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-white hover:bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 p-4 border border-gray-100"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                                    {link.icon}
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-lg font-semibold text-gray-900">{link.title}</h3>
                                    <p className="text-sm text-gray-500">{link.description}</p>
                                </div>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-sm text-gray-500">
                    © 2025 Chorvinsky Family
                </div>
            </div>
        </div>
    );
}
