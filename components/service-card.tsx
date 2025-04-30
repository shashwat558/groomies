"use client"

import { Scissors, Droplets, Smile, Brush, Bug, type LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  price: string
  icon: string
  color?: string
  detailed?: boolean
}

export default function ServiceCard({
  title,
  description,
  price,
  icon,
  color = "pink",
  detailed = false,
}: ServiceCardProps) {
  const icons: Record<string, LucideIcon> = {
    Scissors,
    Droplets,
    Smile,
    Brush,
    Bug,
  }

  const Icon = icons[icon] || Scissors

  const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-700",
      border: "border-pink-100",
      hover: "hover:border-pink-300",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      border: "border-purple-100",
      hover: "hover:border-purple-300",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-100",
      hover: "hover:border-blue-300",
    },
    teal: {
      bg: "bg-teal-100",
      text: "text-teal-700",
      border: "border-teal-100",
      hover: "hover:border-teal-300",
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      border: "border-amber-100",
      hover: "hover:border-amber-300",
    },
    rose: {
      bg: "bg-rose-100",
      text: "text-rose-700",
      border: "border-rose-100",
      hover: "hover:border-rose-300",
    },
  }

  const colorClass = colorClasses[color] || colorClasses.pink

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card
        className={`h-full ${colorClass.border} ${colorClass.hover} transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl overflow-hidden`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-full ${colorClass.bg} ${colorClass.text} shadow-md`}>
              <Icon className="h-5 w-5" />
            </div>
            <CardTitle className={`${colorClass.text} text-xl`}>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-base">{description}</CardDescription>

          {detailed && (
            <div className="mt-6 space-y-4">
              <div className="text-sm">
                <span className="font-medium">Duration:</span> 1-2 hours
              </div>
              <div className="text-sm">
                <span className="font-medium">Includes:</span>
                <ul className="list-disc pl-5 mt-2 space-y-1.5">
                  {title === "Full Grooming" && (
                    <>
                      <li>Bath with premium shampoo</li>
                      <li>Blow dry and brush out</li>
                      <li>Haircut to your specifications</li>
                      <li>Nail trimming and filing</li>
                      <li>Ear cleaning</li>
                      <li>Teeth brushing</li>
                      <li>Cologne spritz</li>
                      <li>Bow or bandana</li>
                    </>
                  )}
                  {title === "Bath & Brush" && (
                    <>
                      <li>Bath with premium shampoo</li>
                      <li>Conditioner treatment</li>
                      <li>Blow dry</li>
                      <li>Thorough brushing</li>
                      <li>Ear cleaning</li>
                      <li>Cologne spritz</li>
                    </>
                  )}
                  {title === "Nail Trimming" && (
                    <>
                      <li>Nail trimming</li>
                      <li>Nail filing to smooth edges</li>
                      <li>Paw pad trim (optional)</li>
                    </>
                  )}
                  {title === "Teeth Brushing" && (
                    <>
                      <li>Gentle teeth cleaning</li>
                      <li>Pet-safe toothpaste</li>
                      <li>Breath freshener</li>
                    </>
                  )}
                  {title === "De-shedding Treatment" && (
                    <>
                      <li>Specialized de-shedding shampoo</li>
                      <li>Thorough brushing with de-shedding tools</li>
                      <li>Blow out to remove loose fur</li>
                    </>
                  )}
                  {title === "Flea Treatment" && (
                    <>
                      <li>Flea detection check</li>
                      <li>Medicated flea shampoo</li>
                      <li>Flea comb-through</li>
                      <li>Advice on home treatment</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-2">
          <div className={`text-lg font-bold ${colorClass.text}`}>{price}</div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
