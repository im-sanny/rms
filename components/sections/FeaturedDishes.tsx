'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Flame, Timer, ShoppingCart, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

const featuredDishes = [
    {
        name: "Truffle Risotto",
        description: "Creamy Arborio rice with wild mushrooms and shaved black truffle",
        price: 28,
        imageAlt: "A creamy risotto with truffle shavings",
        isSpecial: true,
        prepTime: "25 mins",
        isPopular: true
    },
    {
        name: "Seared Sea Bass",
        description: "Mediterranean sea bass with herb-infused olive oil and seasonal vegetables",
        price: 32,
        imageAlt: "Perfectly seared sea bass fillet",
        isChefSignature: true,
        prepTime: "20 mins"
    },
    {
        name: "Wagyu Beef Burger",
        description: "Premium Wagyu patty with caramelized onions and truffle aioli",
        price: 24,
        imageAlt: "Gourmet beef burger",
        isPopular: true,
        prepTime: "18 mins"
    },
    {
        name: "Wild Mushroom Pasta",
        description: "House-made tagliatelle with a medley of wild mushrooms in a light cream sauce",
        price: 22,
        imageAlt: "Pasta with assorted mushrooms",
        isVegetarian: true,
        prepTime: "15 mins"
    },
    {
        name: "Lobster Thermidor",
        description: "Succulent lobster in a rich brandy cream sauce, gratinated to perfection",
        price: 42,
        imageAlt: "Classic lobster thermidor",
        isChefSignature: true,
        prepTime: "30 mins",
        isPopular: true
    },
    {
        name: "Quinoa Buddha Bowl",
        description: "Nutrient-rich quinoa with roasted vegetables, avocado, and tahini dressing",
        price: 18,
        imageAlt: "Colorful vegetarian buddha bowl",
        isVegetarian: true,
        prepTime: "15 mins",
        isSpecial: true
    }
];

export default function FeaturedDishes() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(featuredDishes.length / itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };
    
    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const DishCard = ({ dish }) => (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={`/api/placeholder/400/300`}
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
                            Chef's Signature
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
                    <CardTitle className="text-xl font-semibold">{dish.name}</CardTitle>
                    <span className="text-2xl font-bold text-orange-600">${dish.price}</span>
                </div>
                <CardDescription className="text-stone-600 mt-2">
                    {dish.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center text-stone-500 text-sm">
                    <Timer className="w-4 h-4 mr-1" />
                    {dish.prepTime} prep time
                    {dish.isPopular && (
                        <Badge variant="outline" className="ml-2 text-orange-600 border-orange-600">
                            Popular Choice
                        </Badge>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
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
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentPage * 100}%)`,
                                display: 'grid',
                                gridTemplateColumns: `repeat(${featuredDishes.length}, minmax(0, 1fr))`,
                            }}
                        >
                            {featuredDishes.map((dish, index) => (
                                <DishCard key={index} dish={dish} />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {currentPage > 0 && (
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/80 backdrop-blur-sm z-10"
                            onClick={prevPage}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    )}
                    {currentPage < totalPages - 1 && (
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/80 backdrop-blur-sm z-10"
                            onClick={nextPage}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all ${
                                index === currentPage ? 'w-8 bg-orange-500' : 'w-2 bg-orange-200'
                            }`}
                            onClick={() => setCurrentPage(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}