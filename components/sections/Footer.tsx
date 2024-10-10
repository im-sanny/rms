"use client"
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter, Utensils, ChefHat, Wine } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 text-zinc-200 pt-20 pb-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 flex justify-center items-center">
        <div className="absolute top-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 w-64 h-64 bg-red-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo and tagline */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-zinc-800 rounded-full mb-4">
            <Utensils className="w-8 h-8 text-orange-400" />
          </div>
          <h2 className="font-serif text-3xl mb-2">La Maison Délicieuse</h2>
          <p className="text-zinc-400 italic">Where every flavor tells a story</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Hours & Reservations */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Hours & Reservations</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Monday - Thursday</span>
                <span>11:30 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Friday - Saturday</span>
                <span>11:30 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-4" />
              <div className="mt-4 pt-4 border-t border-zinc-700">
                  <p className="text-orange-400 flex items-center">
                    <ChefHat className="mr-2" />
                    Kitchen closes 30 minutes before closing
                  </p>
                </div>
              <div className="flex items-center justify-between">
                
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <div className="space-y-3">
                  <a href="tel:+11234567890" className="flex items-center hover:text-orange-400 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-orange-400/10 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="ml-3">(123) 456-7890</span>
                  </a>
                  <a href="mailto:info@lamaisondelicieuse.com" className="flex items-center hover:text-orange-400 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-orange-400/10 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="ml-3">info@lamaisondelicieuse.com</span>
                  </a>
                </div>
            </div>

                <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400/10">
                  Reserve Now
                </Button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Find Us</h3>
            </div>
            <div className="aspect-[4/3] w-full bg-zinc-800 rounded-lg overflow-hidden mb-4">
              <img 
                src="/api/placeholder/400/300" 
                alt="Restaurant location map" 
                className="w-full h-full object-cover"
              />
            </div>
            <address className="not-italic flex flex-col justify-center items-center space-y-1 text-zinc-400">
              <span className="text-zinc-200">123 Gourmet Avenue</span>
              <span>Culinary District, CP 12345</span>
              <a href="#">
                
              </a>
              <Button variant="outline" size="sm" className="border-
              
              /30">
              Get Directions <ChefHat className="w-4 h-4 ml-1" />
                </Button>
            </address>
          </div>

          {/* Menu Highlights & Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-400/10 flex items-center justify-center">
                <Wine className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Connect & Discover</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <h4 className="font-serif text-lg mb-1">Prix Fixe</h4>
                <p className="text-zinc-400 text-sm">5-course journey</p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <h4 className="font-serif text-lg mb-1">Wine List</h4>
                <p className="text-zinc-400 text-sm">Curated selection</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-wider text-zinc-400">Follow Our Culinary Journey</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Twitter, label: "Twitter" }
                ].map(({ Icon, label }) => (
                  <a 
                    key={label}
                    href="#" 
                    className="group flex-1 bg-zinc-800 rounded-lg p-3 text-center hover:bg-orange-400/10 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 mx-auto text-orange-400 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-zinc-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm mb-4 md:mb-0">
              © 2024 La Maison Délicieuse. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-orange-400">Privacy Policy</a>
              <a href="#" className="text-zinc-400 hover:text-orange-400">Terms of Service</a>
              <a href="#" className="text-zinc-400 hover:text-orange-400">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}