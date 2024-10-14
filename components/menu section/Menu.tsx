import React, { useState } from 'react';
import { Search, Filter, SortAsc, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const MenuPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = ['All', 'Appetizers', 'Main Course', 'Drinks', 'Desserts'];
    const menuItems = {
        appetizers: [
            { id: 1, name: 'Spring Rolls', price: 5.99, description: 'Crispy vegetable spring rolls', image: '/api/placeholder/150/100', dietary: ['vegetarian'] },
            { id: 2, name: 'Chicken Wings', price: 8.99, description: 'Spicy buffalo chicken wings', image: '/api/placeholder/150/100' },
        ],
        'main course': [
            { id: 3, name: 'Grilled Salmon', price: 15.99, description: 'Fresh grilled salmon with lemon butter sauce', image: '/api/placeholder/150/100', dietary: ['gluten-free'] },
            { id: 4, name: 'Vegetable Stir Fry', price: 12.99, description: 'Mixed vegetables stir-fried in a savory sauce', image: '/api/placeholder/150/100', dietary: ['vegan', 'gluten-free'] },
        ],
        drinks: [
            { id: 5, name: 'Iced Tea', price: 2.99, description: 'Refreshing homemade iced tea', image: '/api/placeholder/150/100', dietary: ['vegan'] },
            { id: 6, name: 'Mango Smoothie', price: 4.99, description: 'Creamy mango smoothie', image: '/api/placeholder/150/100', dietary: ['vegetarian'] },
        ],
        desserts: [
            { id: 7, name: 'Chocolate Cake', price: 6.99, description: 'Rich chocolate cake with ganache', image: '/api/placeholder/150/100', dietary: ['vegetarian'] },
            { id: 8, name: 'Fruit Tart', price: 5.99, description: 'Seasonal fruit tart with custard', image: '/api/placeholder/150/100', dietary: ['vegetarian'] },
        ],
    };

    const allItems = Object.values(menuItems).flat();

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem.quantity === 1) {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
        } else {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            ));
        }
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            {/* Header */}
            <header className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                    <Input className="flex-grow" type="text" placeholder="Search dishes..." />
                    <Button variant="outline" size="icon">
                        <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <SortAsc className="h-4 w-4" />
                    </Button>
                </div>
            </header>

            {/* Categories and Menu Items */}
            <div className="flex gap-6">
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-4 flex justify-start overflow-x-auto">
                        {categories.map((category) => (
                            <TabsTrigger key={category.toLowerCase()} value={category.toLowerCase()} className="px-4 py-2">
                                {category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <TabsContent key={category.toLowerCase()} value={category.toLowerCase()} className="mt-0">
                                {(category.toLowerCase() === 'all' ? allItems : menuItems[category.toLowerCase()])?.map((item) => (
                                    <Card key={item.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                                        <CardHeader>
                                            <CardTitle className="flex justify-between items-center">
                                                <span>{item.name}</span>
                                                <span className="text-green-600">${item.price.toFixed(2)}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                                            {item.dietary && (
                                                <div className="flex flex-wrap gap-2 mb-2">
                                                    {item.dietary.map(diet => (
                                                        <Badge key={diet} variant="secondary">{diet}</Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </CardContent>
                                        <CardFooter className="flex justify-between">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" onClick={() => setSelectedItem(item)}>Details</Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>{selectedItem?.name}</DialogTitle>
                                                        <DialogDescription>
                                                            <img src={selectedItem?.image} alt={selectedItem?.name} className="w-full h-48 object-cover mb-4 rounded" />
                                                            <p>{selectedItem?.description}</p>
                                                            <p className="font-bold mt-2">${selectedItem?.price.toFixed(2)}</p>
                                                            {selectedItem?.dietary && (
                                                                <div className="flex flex-wrap gap-2 mt-2">
                                                                    {selectedItem.dietary.map(diet => (
                                                                        <Badge key={diet} variant="secondary">{diet}</Badge>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <Button onClick={() => addToCart(selectedItem)}>Add to Cart</Button>
                                                </DialogContent>
                                            </Dialog>
                                            <Button onClick={() => addToCart(item)}>Quick Add</Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>

            {/* Floating Cart Button (for smaller screens) */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="fixed bottom-4 right-4 rounded-full p-4 md:hidden">
                        <ShoppingCart className="h-6 w-6" />
                        <Badge className="absolute -top-2 -right-2">{totalItems}</Badge>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Your Cart</DialogTitle>
                    </DialogHeader>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center mb-2">
                                    <span>{item.name}</span>
                                    <div className="flex items-center">
                                        <Button variant="outline" size="icon" onClick={() => removeFromCart(item)}><Minus className="h-4 w-4" /></Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button variant="outline" size="icon" onClick={() => addToCart(item)}><Plus className="h-4 w-4" /></Button>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4">
                                <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
                                <Button className="w-full mt-2">Checkout</Button>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Cart Summary (for larger screens) */}
            <div className="hidden md:block fixed top-20 right-4 w-64 bg-white p-4 shadow-lg rounded-lg">
                <h3 className="text-lg font-bold mb-2">Your Cart</h3>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-2">
                                <span>{item.name}</span>
                                <div className="flex items-center">
                                    <Button variant="outline" size="icon" onClick={() => removeFromCart(item)}><Minus className="h-4 w-4" /></Button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <Button variant="outline" size="icon" onClick={() => addToCart(item)}><Plus className="h-4 w-4" /></Button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4">
                            <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
                            <Button className="w-full mt-2">Checkout</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MenuPage;