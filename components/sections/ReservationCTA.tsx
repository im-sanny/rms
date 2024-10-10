"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, UtensilsCrossed, ChefHat, Star } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ReservationCTA() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleReservation = () => {
    setShowConfirmation(true)
    setTimeout(() => setShowConfirmation(false), 3000)
  }

  return (
    <div className="relative bg-orange-50 p-8 lg:p-0 max-w-7xl mx-auto overflow-hidden">
      <div className="lg:grid lg:grid-cols-2 items-stretch">
        {/* Left side - Image and overlay */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://i.ibb.co/hRZZLcD/restaurant-449952.jpg" 
            alt="Restaurant ambiance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <Star className="w-5 h-5 fill-current text-yellow-400" />
              <Star className="w-5 h-5 fill-current text-yellow-400" />
            </div>
            <p className="text-lg italic">&quot;An unforgettable dining experience&quot;</p>
            <p className="text-sm">- Local Food Guide</p>
          </div>
        </div>

        {/* Right side - Reservation content */}
        <div className="lg:p-12">
          <div className="flex items-center mb-6">
            <UtensilsCrossed className="w-10 h-10 text-orange-600 mr-4" />
            <h2 className="text-4xl font-serif text-orange-900">Reserve Your<br />Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
              <Calendar className="w-6 h-6 text-orange-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Open Daily</p>
                <p className="text-sm text-gray-600">Lunch & Dinner</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-xl shadow-sm">
              <Clock className="w-6 h-6 text-orange-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Hours</p>
                <p className="text-sm text-gray-600">11am - 11pm</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-2xl text-white mb-8">
            <div className="flex items-center mb-3">
              <ChefHat className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold">Special Offer</h3>
            </div>
            <p className="mb-4">Book online and receive a complimentary chef&apos;s appetizer for your table</p>
            <Button 
              size="lg" 
              className="w-full bg-white text-orange-600 hover:bg-orange-50 py-6 text-lg rounded-xl transition-all duration-300"
              onClick={handleReservation}
            >
              Book Your Table Now
            </Button>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Groups welcome</span>
            </div>
            <span>|</span>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Same-day booking available</span>
            </div>
          </div>

          {showConfirmation && (
            <Alert className="mt-6 bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                Excellent choice! We&apos;ll redirect you to complete your reservation.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}