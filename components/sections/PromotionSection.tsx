'use client'
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Timer, Sparkles, Clock, CalendarDays, Utensils, Users } from 'lucide-react';

const promotions = [
    {
        title: "Lunch Special",
        description: "20% off all main courses",
        timing: "Mon-Fri, 11:30 AM - 2:30 PM",
        icon: Clock,
        color: "bg-blue-500",
        tag: "Limited Time"
    },
    {
        title: "Happy Hour",
        description: "Buy 1 Get 1 Free on all cocktails",
        timing: "Daily, 4 PM - 7 PM",
        icon: Sparkles,
        color: "bg-purple-500",
        tag: "Popular"
    },
    {
        title: "Family Sunday",
        description: "Kids eat free with every adult meal",
        timing: "Every Sunday",
        icon: Users,
        color: "bg-green-500",
        tag: "Family Favorite"
    },
    {
        title: "Early Bird Dinner",
        description: "15% off dinner menu",
        timing: "Daily, 5 PM - 6:30 PM",
        icon: Utensils,
        color: "bg-orange-500",
        tag: "Best Value"
    }
];

export default function PromotionsSection() {
    return (
        <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-stone-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-stone-900 mb-4">Special Offers</h2>
                    <p className="text-xl text-stone-600">Discover our latest promotions and enjoy great savings</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {promotions.map((promo, index) => {
                        const Icon = promo.icon;
                        return (
                            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col justify-between">
                                <div className={`absolute top-0 right-0 w-32 h-32 ${promo.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300`}></div>

                                <CardHeader className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className={`${promo.color} text-white`}>
                                            {promo.tag}
                                        </Badge>
                                        <Icon className="w-8 h-8 text-stone-600 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold mb-2">{promo.title}</CardTitle>
                                    <CardDescription className="text-lg font-medium text-orange-600 min-h-[40px]">
                                        {promo.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex items-center text-stone-600 mt-4">
                                    <CalendarDays className="w-5 h-5 mr-2" />
                                    <span>{promo.timing}</span>
                                </CardContent>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Card>

                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center p-4 bg-orange-100 text-orange-800 rounded-lg">
                        <Timer className="w-5 h-5 mr-2" />
                        <span className="font-medium">Limited time offers! Don&apos;t miss out on these exclusive deals.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}