"use client"

import Link from "next/link"
import { PawPrint, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import { motion } from "framer-motion"
import DecorativePaws from "@/components/decorative-paws"
import Navbar from "@/components/Navbar"

import Footer from "@/components/Footer"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
      <Navbar />
      <main className="flex-1">
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
              className="flex flex-col items-center space-y-4 text-center mb-16"
            >
              <div className="inline-flex items-center justify-center p-1 mb-2 rounded-full bg-pink-100 text-pink-700">
                <div className="px-3 py-1 text-sm font-medium rounded-full bg-white">Premium Pet Care</div>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-700 via-purple-600 to-pink-700 text-transparent bg-clip-text">
                  Our Grooming Services
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Professional pet grooming services tailored to your pet&apos;s specific needs.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <ServiceCard
                title="Full Grooming"
                description="Complete bath, haircut, nail trimming, ear cleaning, and more for your furry friend."
                price="From $65"
                icon="Scissors"
                color="pink"
                detailed
              />
              <ServiceCard
                title="Bath & Brush"
                description="Refreshing bath with shampoo, conditioner, blow dry, and thorough brushing."
                price="From $40"
                icon="Droplets"
                color="purple"
                detailed
              />
              <ServiceCard
                title="Nail Trimming"
                description="Quick and painless nail trimming to keep your pet comfortable."
                price="From $15"
                icon="Scissors"
                color="blue"
                detailed
              />
              <ServiceCard
                title="Teeth Brushing"
                description="Dental care to keep your pet's teeth clean and breath fresh."
                price="From $20"
                icon="Smile"
                color="teal"
                detailed
              />
              <ServiceCard
                title="De-shedding Treatment"
                description="Special treatment to reduce shedding and keep your home cleaner."
                price="From $30"
                icon="Brush"
                color="amber"
                detailed
              />
              <ServiceCard
                title="Flea Treatment"
                description="Effective flea treatment to keep your pet comfortable and your home pest-free."
                price="From $25"
                icon="Bug"
                color="rose"
                detailed
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-200 to-purple-200 blur-lg opacity-50" />
              <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-pink-100">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-purple-600 text-transparent bg-clip-text mb-6">
                  Special Packages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 p-6 rounded-xl shadow-lg border border-pink-100">
                    <div className="inline-block p-3 bg-white rounded-lg shadow-md mb-4">
                      <PawPrint className="h-6 w-6 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-bold text-pink-600 mb-2">New Customer Package</h3>
                    <p className="text-gray-600 mb-4">
                      15% off your first full grooming session, plus a free pet bandana.
                    </p>
                    <div className="text-lg font-bold text-pink-700">$55.25 (Save $9.75)</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-6 rounded-xl shadow-lg border border-purple-100">
                    <div className="inline-block p-3 bg-white rounded-lg shadow-md mb-4">
                      <PawPrint className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">Loyalty Package</h3>
                    <p className="text-gray-600 mb-4">Book 5 grooming sessions and get the 6th one free.</p>
                    <div className="text-lg font-bold text-purple-700">Save up to $65</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-pink-700 mb-6">Ready to Book Your Pet&apos;s Grooming?</h2>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-200/50 hover:shadow-pink-300/50 transition-all duration-300 rounded-xl px-8"
              >
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
