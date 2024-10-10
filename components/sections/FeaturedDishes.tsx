/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Flame, Timer, ShoppingCart, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

interface Dish {
    name: string;
    description: string;
    price: number;
    image: string;
    imageAlt: string;
    isSpecial?: boolean;
    prepTime: string;
    isPopular?: boolean;
    isChefSignature?: boolean;
    isVegetarian?: boolean;
}

const featuredDishes = [
    {
        name: "Truffle Risotto",
        description: "Creamy Arborio rice with wild mushrooms and shaved black truffle",
        price: 28,
        image: 'https://i.ibb.co/BnJYRMw/chicken-skewers-with-slices-sweet-peppers-dill.jpg',
        imageAlt: "A creamy risotto with truffle shavings",
        isSpecial: true,
        prepTime: "25 mins",
        isPopular: true
    },
    {
        name: "Seared Sea Bass",
        description: "Mediterranean sea bass with herb-infused olive oil and seasonal vegetables",
        price: 32,
        image: "",
        imageAlt: "Perfectly seared sea bass fillet",
        isChefSignature: true,
        prepTime: "20 mins"
    },
    {
        name: "Wagyu Beef Burger",
        description: "Premium Wagyu patty with caramelized onions and truffle aioli",
        price: 24,
        image: "",
        imageAlt: "Gourmet beef burger",
        isPopular: true,
        prepTime: "18 mins"
    },
    {
        name: "Wild Mushroom Pasta",
        description: "House-made tagliatelle with a medley of wild mushrooms in a light cream sauce",
        price: 22,
        image: "",
        imageAlt: "Pasta with assorted mushrooms",
        isVegetarian: true,
        prepTime: "15 mins"
    },
    {
        name: "Lobster Thermidor",
        description: "Succulent lobster in a rich brandy cream sauce, gratinated to perfection",
        price: 42,
        image: "",
        imageAlt: "Classic lobster thermidor",
        isChefSignature: true,
        prepTime: "30 mins",
        isPopular: true
    },
    {
        name: "Quinoa Buddha Bowl",
        description: "Nutrient-rich quinoa with roasted vegetables, avocado, and tahini dressing",
        price: 18,
        image: "",
        imageAlt: "Colorful vegetarian buddha bowl",
        isVegetarian: true,
        prepTime: "15 mins",
        isSpecial: true
    }
];

export default function FeaturedDishes() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth;
        const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    interface DishCardProps {
        dish: Dish;
    }

    const DishCard: React.FC<DishCardProps> = ({ dish }) => (
        <Card className="flex-shrink-0 w-[300px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-40 overflow-hidden">
                <img
                    src={dish.image || "https://via.placeholder.com/300"}
                    alt={dish.imageAlt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {dish.isSpecial && (
                        <Badge className="bg-red-500">
                            <Flame className="w-4 h-4 mr-1" />
                            Special
                        </Badge>
                    )}
                    {dish.isChefSignature && (
                        <Badge className="bg-purple-500">
                            <ChefHat className="w-4 h-4 mr-1" />
                            Chef&apos;s Signature
                        </Badge>
                    )}
                    {dish.isVegetarian && (
                        <Badge className="bg-green-500">
                            <Leaf className="w-4 h-4 mr-1" />
                            Vegetarian
                        </Badge>
                    )}
                </div>
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">{dish.name}</CardTitle>
                    <span className="text-xl font-bold text-orange-600">${dish.price}
                    </span>
                </div>
                <CardDescription className="text-stone-600 mt-2 line-clamp-2">
                    {dish.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center text-stone-500 text-sm">
                    <Timer className="w-4 h-4 mr-1" />
                    {dish.prepTime} prep time
                    {dish.isPopular && (
                        <Badge variant="outline" className="ml-2 text-orange-600 border-orange-600">
                            Popular
                        </Badge>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Order
                </Button>
            </CardFooter>
        </Card>
    );

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-stone-900 mb-4">Featured Dishes</h2>
                    <p className="text-xl text-stone-600">Exquisite flavors crafted with passion</p>
                </div>

                <div className="relative">
                    {/* Scroll Buttons */}
                    {canScrollLeft && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/80 backdrop-blur-sm z-10 hover:bg-white/90 transition-colors duration-300"
                            onClick={() => scroll('left')}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    )}
                    {canScrollRight && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/80 backdrop-blur-sm z-10 hover:bg-white/90 transition-colors duration-300"
                            onClick={() => scroll('right')}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )}

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {featuredDishes.map((dish, index) => (
                            <div key={index} className="snap-start">
                                <DishCard dish={dish} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}