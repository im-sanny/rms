"use client"
import React, { useState } from 'react';
import { Menu, Home, BookOpen, Calendar, Info, Phone, User, ShoppingCart } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const Navbar = () => {
    const [isLoggedIn] = useState(false);
    const [cartItems] = useState(3);

    const menuItems = [
        { name: 'Appetizers', href: '#' },
        { name: 'Main Courses', href: '#' },
        { name: 'Desserts', href: '#' },
        { name: 'Beverages', href: '#' },
    ];

    const MobileNav = () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Bistro Fusion</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-4">
                    <Button variant="ghost" className="justify-start">
                        <Home className="mr-2 h-4 w-4" /> Home
                    </Button>
                    <Button variant="ghost" className="justify-start">
                        <BookOpen className="mr-2 h-4 w-4" /> Menu
                    </Button>
                    <Button variant="default" className="justify-start">
                        Order Now
                    </Button>
                    <Button variant="ghost" className="justify-start">
                        <Calendar className="mr-2 h-4 w-4" /> Reservations
                    </Button>
                    <Button variant="ghost" className="justify-start">
                        <Info className="mr-2 h-4 w-4" /> About Us
                    </Button>
                    <Button variant="ghost" className="justify-start">
                        <Phone className="mr-2 h-4 w-4" /> Contact
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );

    return (
        <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 mb-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <MobileNav />
                        <span className="text-xl font-bold">Rainbow</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Button variant="ghost">
                                        <Home className="mr-2 h-4 w-4" /> Home
                                    </Button>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <BookOpen className="mr-2 h-4 w-4" /> Menu
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {menuItems.map((item) => (
                                                <li key={item.name}>
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            href={item.href}
                                                        >
                                                            <div className="text-sm font-medium leading-none">{item.name}</div>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Button variant="default">
                                        Order Now
                                    </Button>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Button variant="ghost">
                                        <Calendar className="mr-2 h-4 w-4" /> Reservations
                                    </Button>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Button variant="ghost">
                                        <Info className="mr-2 h-4 w-4" /> About
                                    </Button>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Button variant="ghost">
                                        <Phone className="mr-2 h-4 w-4" /> Contact
                                    </Button>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {isLoggedIn ? (
                                    <>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>My Orders</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Logout</DropdownMenuItem>
                                    </>
                                ) : (
                                    <>
                                        <DropdownMenuItem>Sign In</DropdownMenuItem>
                                        <DropdownMenuItem>Sign Up</DropdownMenuItem>
                                    </>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-4 w-4" />
                            <Badge variant="destructive" className="absolute -top-2 -right-2">
                                {cartItems}
                            </Badge>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;