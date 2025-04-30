"use client"

import Link from "next/link"
import {  Heart, Star } from "lucide-react"


import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import DecorativePaws from "@/components/decorative-paws"
import HeroCarousel from "@/components/hero-carousel"
import ServiceCard from "@/components/service-card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
      <Navbar />
      <div className="w-screen flex justify-center items-center">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <DecorativePaws className="absolute inset-0 z-0 opacity-5" />
          
          
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
            
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center space-y-4 text-center mb-12 w-full"
            >
              <div className="inline-flex items-center justify-center p-1 mb-2 rounded-full bg-pink-100 text-pink-700">
                <div className="px-3 py-1 text-sm font-medium rounded-full bg-white">
                  Chicago&apos;s Top-Rated Pet Grooming
                </div>
              </div>

              <div className="space-y-2 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-700 via-purple-600 to-pink-700 text-transparent bg-clip-text">
                  Luxury Grooming for Your Furry Friends
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  Treat your pet to a spa day they deserve. Professional grooming with a gentle touch.
                </p>
              </div>

              
              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-200 hover:shadow-pink-300 transition-all duration-300 rounded-xl px-8"
                >
                  <Link href="/contact">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-pink-200 hover:bg-pink-50 rounded-xl px-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-pink-200/50 max-w-6xl"
            >
              <HeroCarousel />
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50/70 z-0" />
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center mb-16"
            >
              <div className="inline-flex items-center justify-center p-1 mb-2 rounded-full bg-pink-100 text-pink-700">
                <div className="px-3 py-1 text-sm font-medium rounded-full bg-white">
                  <span className="text-pink-500">♥</span> For Your Beloved Pets
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-700 to-purple-600 text-transparent bg-clip-text">
                Our Premium Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Tailored grooming experiences for pets of all shapes, sizes, and temperaments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Full Grooming"
                description="Complete bath, haircut, nail trimming, ear cleaning, and more for your furry friend."
                price="From $65"
                icon="Scissors"
                color="pink"
              />
              <ServiceCard
                title="Bath & Brush"
                description="Refreshing bath with shampoo, conditioner, blow dry, and thorough brushing."
                price="From $40"
                icon="Droplets"
                color="purple"
              />
              <ServiceCard
                title="Nail Trimming"
                description="Quick and painless nail trimming to keep your pet comfortable."
                price="From $15"
                icon="Scissors"
                color="blue"
              />
            </div>

            <div className="flex justify-center mt-16">
              <Button
                asChild
                variant="outline"
                className="border-pink-200 hover:bg-pink-50 rounded-xl px-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-70 z-0" />
          <div className="absolute inset-0 opacity-5 z-0">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-pink-400 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl" />
          </div>
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-1 mb-2 rounded-full bg-pink-100 text-pink-700">
                  <div className="px-3 py-1 text-sm font-medium rounded-full bg-white">
                    <span className="text-pink-500">★</span> Trusted by Thousands
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-pink-700">
                  Why Choose Pawsome Grooming?
                </h2>
                <p className="text-gray-600 text-lg">
                  {"With over 10 years of experience serving Chicago's pets, our certified groomers provide gentle, stress-free grooming in a clean, comfortable environment."}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Certified professional groomers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Cage-free, stress-free environment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Premium, pet-safe products</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Convenient Chicago location</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-200/50 hover:shadow-pink-300/50 transition-all duration-300 rounded-xl px-8 mt-4"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-200 to-purple-200 blur-lg opacity-70" />
                <div className="relative h-[450px] overflow-hidden rounded-2xl border border-pink-100 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 to-purple-100/80" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center space-y-6 max-w-md">
                      <div className="mx-auto w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <Heart className="h-10 w-10 text-pink-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-pink-800">First-Time Customer?</h3>
                      <p className="text-gray-700 text-lg">
                        Enjoy 15% off your first grooming session and a complimentary pet bandana!
                      </p>
                      <Button
                        asChild
                        variant="secondary"
                        className="bg-white hover:bg-gray-50 text-pink-700 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                      >
                        <Link href="/contact">Claim Offer</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-white z-0" />
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 text-center mb-16"
            >
              <div className="inline-flex items-center justify-center p-1 mb-2 rounded-full bg-pink-100 text-pink-700">
                <div className="px-3 py-1 text-sm font-medium rounded-full bg-white">
                  <Star className="h-3 w-3 inline mr-1 text-yellow-400" />
                  <Star className="h-3 w-3 inline mr-1 text-yellow-400" />
                  <Star className="h-3 w-3 inline mr-1 text-yellow-400" />
                  <Star className="h-3 w-3 inline mr-1 text-yellow-400" />
                  <Star className="h-3 w-3 inline text-yellow-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-700 to-purple-600 text-transparent bg-clip-text">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                {"Don't just take our word for it - hear from our happy customers and their pets."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-pink-50 to-pink-100/50 p-8 rounded-2xl shadow-lg border border-pink-100"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p className="italic text-gray-600 text-lg">
                    {'"My poodle has never looked better! The staff was so patient with him, and he came home happy and              beautiful."'}
                  </p>
                  <div className="pt-4 border-t border-pink-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <div className="font-medium">Sarah T.</div>
                      <div className="text-sm text-gray-500">Chicago</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-2xl shadow-lg border border-purple-100"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p className="italic text-gray-600 text-lg">
                    {"I've tried several groomers in Chicago, and Pawsome is by far the best. My anxious rescue dog actually enjoys going there!"}
                  </p>
                  <div className="pt-4 border-t border-purple-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div>
                      <div className="font-medium">Michael R.</div>
                      <div className="text-sm text-gray-500">Lincoln Park</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl shadow-lg border border-blue-100"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p className="italic text-gray-600 text-lg">
                    {"The groomers are true professionals. They handled my cat with such care, and the results were amazing."}
                  </p>
                  <div className="pt-4 border-t border-blue-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center text-white font-bold">
                      J
                    </div>
                    <div>
                      <div className="font-medium">Jennifer L.</div>
                      <div className="text-sm text-gray-500">Wicker Park</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50 z-0" />
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-200 to-purple-200 blur-lg opacity-70" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-pink-100"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex items-center">
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-pink-700">Ready to Book Your Pet&apos;s Spa Day?</h2>
                        <p className="text-gray-600">
                          Our team of certified groomers is ready to pamper your pet. Book an appointment today!
                        </p>
                        <div className="pt-4">
                          <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-200/50 hover:shadow-pink-300/50 transition-all duration-300 rounded-xl px-8"
                          >
                            <Link href="/contact">Book Now</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Happy groomed dog"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>
      <Footer />
    </div>
  )
}
