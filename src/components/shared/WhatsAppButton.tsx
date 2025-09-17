import React, { useState, useEffect } from 'react';
import {  X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your services. Can we discuss my project?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="relative">
        {/* Chat bubble animation */}
        <div
          className={`absolute -top-12 right-0 bg-white rounded-lg px-4 py-2 shadow-lg border transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className="text-sm text-gray-700 whitespace-nowrap">
            Need help? Chat with us!
          </p>
          <div className="absolute -bottom-1 right-4 w-3 h-3 bg-white border-r border-b transform rotate-45"></div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-hidden focus:ring-4 focus:ring-green-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>

          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
            <div className="absolute inset-1 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;