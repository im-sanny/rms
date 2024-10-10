'use client'
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Food Critic",
        comment: "An absolute gem! The attention to detail in every dish and the warm atmosphere make this place truly special.",
        rating: 5,
        image: "/api/placeholder/64/64"
    },
    {
        name: "Michael Chen",
        role: "Regular Customer",
        comment: "I've been coming here for years and the quality has never wavered. The chef's creativity keeps me coming back for more.",
        rating: 5,
        image: "/api/placeholder/64/64"
    },
    {
        name: "Emily Thompson",
        role: "Local Food Blogger",
        comment: "A perfect blend of traditional flavors and modern culinary techniques. Every visit is a new culinary adventure.",
        rating: 5,
        image: "/api/placeholder/64/64"
    }
];

export default function AboutSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Story Section */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <Badge className="bg-orange-500 text-white px-4 py-1">Our Story</Badge>
                            <h2 className="text-4xl font-bold text-stone-900">A Culinary Journey Since 1985</h2>
                        </div>

                        <div className="prose prose-lg text-stone-600">
                            <p>
                                For over three decades, La Maison has been more than just a restaurant—it&apos;s been a
                                celebration of flavors, family, and fine dining. Founded by Chef Antoine Dubois,
                                our establishment has grown from a small family-run bistro to a culinary landmark
                                while staying true to our roots.
                            </p>
                            <p>
                                We believe in the art of gastronomy, where every dish tells a story and every meal
                                is an experience. Our commitment to using locally-sourced, seasonal ingredients
                                ensures that you taste the difference in every bite.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">35+</div>
                                <div className="text-sm text-stone-600">Years of Excellence</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">15k+</div>
                                <div className="text-sm text-stone-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600">4.9</div>
                                <div className="text-sm text-stone-600">Customer Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials Section */}
                    <div className="relative">
                        <Card className="bg-white shadow-lg">
                            <CardContent className="p-8">
                                <Quote className="w-12 h-12 text-orange-500 mb-6" />

                                <div className="relative h-48">
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className={`absolute top-0 left-0 w-full transition-all duration-500 ${index === currentTestimonial
                                                    ? 'opacity-100 translate-x-0'
                                                    : 'opacity-0 translate-x-full'
                                                }`}
                                        >
                                            <p className="text-lg text-stone-600 italic mb-6">
                                                {testimonial.comment}
                                            </p>
                                            <div className="flex items-center">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full mr-4"
                                                />
                                                <div>
                                                    <div className="font-semibold text-stone-900">
                                                        {testimonial.name}
                                                    </div>
                                                    <div className="text-stone-500 text-sm">
                                                        {testimonial.role}
                                                    </div>
                                                    <div className="flex mt-1">
                                                        {[...Array(testimonial.rating)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between mt-6">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={prevTestimonial}
                                        className="rounded-full hover:bg-orange-50"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={nextTestimonial}
                                        className="rounded-full hover:bg-orange-50"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500 opacity-10 rounded-full -translate-x-12 -translate-y-12"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 opacity-10 rounded-full translate-x-16 translate-y-16"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}