"use client"
import { ArrowRight, Calendar, Clock, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Hero() {

    return (
        <div className="relative h-[90vh] w-full overflow-hidden mt-[64px] ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://i.ibb.co/Y2NtTwD/pexels-isabella-mendes-858508.jpg"
                    alt="Restaurant ambiance"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="object-contain"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
                    Bistro Fusion
                </h1>

                <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
                    Where Tradition Meets Innovation - Experience Culinary Excellence
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
                    <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>Open Today: 11:30 AM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-400" />
                        <span>4.8/5 from 500+ reviews</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>123 Culinary Avenue, Foodie City</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                        Order Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                    >
                        <Calendar className="mr-2 h-5 w-5" /> Make a Reservation
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
