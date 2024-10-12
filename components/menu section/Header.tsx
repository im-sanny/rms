"use client"
import React, { useState, ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Header() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState<string | null>(null);

    // Handle search input change
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        // Implement search logic here
    };

    // Handle category change
    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        // Implement category filter logic here
    };

    // Handle sort change
    const handleSortChange = (value: string) => {
        setSortOption(value);
        // Implement sort logic here
    };

    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative flex-grow max-w-md">
                    <Input
                        type="text"
                        placeholder="Search dishes..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="pl-10 pr-4 py-2 w-full"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>

                <div className="flex gap-2">
                    <Select onValueChange={handleCategoryChange} value={selectedCategory || ''}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="appetizers">Appetizers</SelectItem>
                            <SelectItem value="mains">Mains</SelectItem>
                            <SelectItem value="desserts">Desserts</SelectItem>
                            <SelectItem value="drinks">Drinks</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select onValueChange={handleSortChange} value={sortOption || ''}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="price">Price</SelectItem>
                            <SelectItem value="popularity">Popularity</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                            <SelectItem value="gluten-free">Gluten-free</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </header>
    );
}
