import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
            <h1 className="text-3xl font-bold text-black mb-4">Contact Us</h1>
            <p className="text-lg text-black mb-2">For complaints and suggestions, call or WhatsApp:</p>
            <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                    <FaPhone className="text-black mr-2" />
                    <span className="text-lg text-black">0302 9015909</span>
                </div>
                <div className="flex items-center">
                    <FaWhatsapp className="text-green-500 mr-2" />
                    <span className="text-lg text-black">WhatsApp: 0302 9015909</span>
                </div>
            </div>
            <p className="text-lg text-black mt-4">We are available 24/7 for your service!</p>
        </div>
    );
};

export default Contact;