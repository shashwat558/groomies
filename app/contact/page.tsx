"use client"

import Link from "next/link"
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import DecorativePaws from "@/components/decorative-paws"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
      <Navbar />
      <main className="flex w-screen justify-center items-center">
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <DecorativePaws className="absolute inset-0 z-0 opacity-5" />
          
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
            <Button asChild variant="ghost" className="mb-6 hover:bg-pink-50 transition-all duration-300">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col justify-center items-center space-y-4 text-center mb-16"
            >
              <div className="flex items-center justify-center p-1 mb-2 rounded-full bg-pink-100 text-pink-700">
                <div className="px-3 py-1 text-sm font-medium rounded-full bg-white">Get In Touch</div>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-700 via-purple-600 to-pink-700 text-transparent bg-clip-text">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Book an appointment or get in touch with our friendly team.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-200 to-purple-200 blur-lg opacity-50" />
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-pink-100">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 text-transparent bg-clip-text mb-6">
                      Book an Appointment
                    </h2>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                            First Name
                          </label>
                          <Input
                            id="first-name"
                            placeholder="Enter your first name"
                            className="border-pink-100 focus:border-pink-300 focus:ring-pink-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                            Last Name
                          </label>
                          <Input
                            id="last-name"
                            placeholder="Enter your last name"
                            className="border-pink-100 focus:border-pink-300 focus:ring-pink-200"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="border-pink-100 focus:border-pink-300 focus:ring-pink-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="border-pink-100 focus:border-pink-300 focus:ring-pink-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="pet-type" className="text-sm font-medium text-gray-700">
                          Pet Type
                        </label>
                        <select
                          id="pet-type"
                          className="flex h-10 w-full rounded-md border border-pink-100 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select pet type</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-gray-700">
                          Service Required
                        </label>
                        <select
                          id="service"
                          className="flex h-10 w-full rounded-md border border-pink-100 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select service</option>
                          <option value="full-grooming">Full Grooming</option>
                          <option value="bath-brush">Bath & Brush</option>
                          <option value="nail-trimming">Nail Trimming</option>
                          <option value="teeth-brushing">Teeth Brushing</option>
                          <option value="deshedding">De-shedding Treatment</option>
                          <option value="flea-treatment">Flea Treatment</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Special Instructions
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Any special requirements or concerns?"
                          className="min-h-[120px] border-pink-100 focus:border-pink-300 focus:ring-pink-200"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-200/50 hover:shadow-pink-300/50 transition-all duration-300 rounded-xl"
                      >
                        Book Appointment
                      </Button>
                    </form>
                  </div>
                </div>
                
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-200 to-purple-200 blur-lg opacity-50" />
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-pink-100">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 text-transparent bg-clip-text mb-6">
                      Our Location
                    </h2>
                    <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden shadow-md">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95157.5228254707!2d-87.7457587!3d41.8781136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white shadow-md">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Address</h3>
                          <p className="text-gray-600">123 Woof Street, Chicago, IL 60601</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white shadow-md">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Phone</h3>
                          <p className="text-gray-600">(312) 555-PETS</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white shadow-md">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Email</h3>
                          <p className="text-gray-600">woof@pawsomegrooming.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white shadow-md">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">Hours</h3>
                          <p className="text-gray-600">Monday - Friday: 8am - 7pm</p>
                          <p className="text-gray-600">Saturday: 9am - 5pm</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </motion.div>
              
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-10">
            <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-200 to-purple-200 blur-lg opacity-30" />
                  <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-pink-100">
                    <h2 className="text-xl font-bold text-pink-700 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-5">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="font-medium text-pink-600">How long does a grooming session take?</h3>
                        <p className="text-gray-600 mt-2">
                          Most grooming sessions take 1-3 hours depending on your pet&apos;s size, coat condition, and
                          services requested.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="font-medium text-pink-600">Do I need to stay during the appointment?</h3>
                        <p className="text-gray-600 mt-2">
                          No, you&apos;re welcome to drop off your pet and return when the grooming is complete. We&apos;ll call
                          you when they&apos;re ready!
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <h3 className="font-medium text-pink-600">Are vaccinations required?</h3>
                        <p className="text-gray-600 mt-2">
                          Yes, we require proof of rabies vaccination for all pets. Additional vaccinations may be
                          recommended.
                        </p>
                      </div>
                    </div>
                  </div>
         </div>
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  )
}
